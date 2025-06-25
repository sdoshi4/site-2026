import { Icon } from '@iconify/react';
import { useState } from 'react';
import useSWR from 'swr';
import { useQueryParam, StringParam, withDefault } from 'use-query-params';
import Fuse from 'fuse.js';

const ErrorMessageBox = ({ message, onRetry }) => (
  <div style={{ margin: '20px', padding: '20px', backgroundColor: '#ffcccc', color: '#cc0000', borderRadius: '5px', textAlign: 'center' }}>
    <p>{message}</p>
    {onRetry && (
      <button onClick={onRetry} style={{ marginTop: '10px', padding: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#f2f2f2', border: 'none', borderRadius: '5px' }}>
        Retry
      </button>
    )}
  </div>
)

const bgGradients = {
  0: 'bg-red-300',
  1: 'bg-yellow-300',
  2: 'bg-blue-300',
  3: 'bg-pink-300',
  4: 'bg-gray-300',
  5: 'bg-green-300',
  
}

const ExhibitCard = ({ exhibit, idx }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button key={idx} className={`border rounded-lg p-5 md:w-96 w-full flex flex-col gap-2 text-left shadow-md hover:shadow-xl duration-200
    transition-transform transform hover:scale-105 ${ // This makes them expand on hover  
      bgGradients[idx % Object.keys(bgGradients).length] // This is where you assign background color to the exhibits
    }`} onClick={() => setExpanded(!expanded)}>
      <div className="flex flex-row gap-2">
        <p className='text-gray-500'>{exhibit.id}</p>
        <h2 className="font-semibold text-left">{exhibit.title}</h2>
      </div>

      <div className='flex flex-col justify-between gap-1'>
        <span className='flex flex-row gap-2'>
          <Icon icon="carbon:location-filled" className='text-xl text-blue-800' />
          <span>{exhibit.buildingA}</span>
          <span className='text-gray-600 italic'>{exhibit.subBuildingA}</span>
        </span>
        <span className='flex flex-row gap-2'>
          <Icon icon='codicon:organization' className='text-xl text-yellow-500' />
          <span>{exhibit.affiliation}</span>
        </span>
      </div>
      <div className={`${expanded ? '' : 'h-30 line-clamp-4'} my-2`}>
        {exhibit.content}
      </div>
      {/* <div className="flex flex-row justify-around">
              <button className="w-10 h-10">
                <Icon icon="gg:expand" className='text-3xl hover:text-yellow-400 duration-200' />
              </button>
              <button className="w-10 h-10"><Icon icon="heroicons:map-pin-20-solid" className='text-3xl hover:text-yellow-400 duration-200' /></button>
              <button className="w-10 h-10"><Icon icon="ic:round-star" className='text-3xl hover:text-yellow-400 duration-200' /></button>
            </div> */}

      {
        <Icon className='mx-auto text-2xl' icon={expanded ? 'material-symbols:expand-less' : "material-symbols:expand-more"} />}
    </button>
  )
}

const Exhibits = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(10);
  const [searchTerm, setSearchTerm] = useQueryParam('q', withDefault(StringParam, ''));;
  const [searchBoxText, setSearchBoxText] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const itemsPerPage = 24;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   // 'https://n11.eohillinois.org/api/exhibits',
  //   `https://n11.eohillinois.org/api/exhibits?pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}
  //   ${searchTerm == '' ? '' :
  //     `&filters[$or][0][Exhibit_Name][$containsi]=${searchTerm}&filters[$or][1][VisGuide_Description][$containsi]=${searchTerm}&filters[$or][2][Exhibit_Number][$eq]=${searchTerm}&filters[$or][3][Affiliation][$eq]=${searchTerm}&filters[$or][4][Building_A][$containsi]=${searchTerm}&filters[$or][5][Tags][$containsi]=${searchTerm}`}`,
  //   fetcher
  // );
  const { data, error, isLoading } = useSWR(
    `https://n11.eohillinois.org/api/exhibits?pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`,
    fetcher
  );
  

  if (error) {
    return <ErrorMessageBox message="failed to load, retry" onRetry={() => window.location.reload()} />;
  }

  if (!data)
    return (
      <div className="flex w-full justify-center items-center flex-col">
        <p className="font-bold text-xl m-4">
          Loading...
        </p>
        <img
          src="/assets/logo/gear1.gif"
          alt="loading"
          className="w-20"
        />
      </div>);
  const runSearch = () => {
    setSearchTerm(searchBoxText.trim());
    setSearchBoxText('');
    setSearchOpen(false);
    setCurrentPage(1);
  };

// .map(e => e.attributes)
  const items = data.data
    .map(exhibit => {
      return {
        id: exhibit['Exhibit_Number'],
        title: exhibit['Exhibit_Name'],
        content: exhibit['VisGuide_Description'],
        buildingA: exhibit['Building_A'],
        subBuildingA: exhibit['Sub_Building_A'],
        buildingB: exhibit['Building_B'],
        subBuildingB: exhibit['Sub_Building_B'],
        affiliation: exhibit['Affiliation'],
        department: exhibit['Department'],
        intendedAudience: exhibit['Intended_Audience'],
        tags: exhibit['Tags']
      }
    });

  const pageCount = data.meta.pagination.pageCount;
  if (numPages != pageCount) {
    setNumPages(pageCount)
  }
  const fuseOptions = {
    includeScore: true,
    threshold: 0.2,
    distance: 200,
    minMatchCharLength: 1,
    ignoreLocation: true,
    keys: ['title', 'content', 'buildingA', 'subBuildingA', 'affiliation', 'tags']
  };
  
  const fuse = new Fuse(items, fuseOptions);
  const trimmedQuery = searchTerm.trim();
  const fuseResults = trimmedQuery ? fuse.search(trimmedQuery) : null;
  
  const filteredItems = fuseResults
    ? fuseResults.map(result => result.item)
    : items;
  
  return (
    <div className="flex flex-col gap-5">

      <span className="flex flex-row justify-between mx-8">
        <h1 className='font-heading text-2xl mt-2 md:text-center md:mx-0'>Exhibits</h1>
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <Icon icon="bx:search" className='text-3xl' />
        </button>
      </span>

      {searchOpen &&
        <span className="flex flex-row w-full px-5">
          <input
            className="border rounded-l-xl p-2 border-gray-600 duration-300 flex-grow"
            placeholder="Building, category, department, etc."
            onChange={(e) => setSearchBoxText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') runSearch();
            }}
            value={searchBoxText}
          />
          <button
            className="rounded-r-xl bg-blue-700 p-3 font-semibold text-white"
            onClick={runSearch}
          >
            Go
          </button>

        </span>
      }

      {
        searchTerm.length > 0 &&
        <div className="flex flex-row px-8 justify-between items-center">
          <p>Searching for {searchTerm}</p>
          <button onClick={() => {
            setSearchTerm('')
            setSearchOpen(false)
          }}>
            <Icon icon="mdi:clear-outline" className='text-black text-3xl' />
          </button>
        </div>
      }

      <div className="w-full flex flex-wrap justify-center gap-5 px-4">

      {filteredItems.map((item, idx) => (
        <ExhibitCard exhibit={item} idx={idx} key={idx} />
      ))}

      </div>
      <div className="flex flex-row justify-between items-center mx-5">
        <p>Page {currentPage} of {numPages} </p>
        <div className="flex flex-row gap-3">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className="disabled:text-gray-500">
            <Icon icon="ic:round-navigate-before" className='text-3xl' />
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages))}
            disabled={currentPage === numPages}
            className="disabled:text-gray-500">
            <Icon icon="ic:round-navigate-next" className='text-3xl' />
          </button>
        </div>
      </div>
    </div >
  );
}

export default Exhibits;