import Button from "@/button";
import Filter from "@/filter/index.js";
import Paginate from "@/paginate";
import { getHost } from "@utilities/host.js";
import React, { Component } from "react";
import Bubbles from "./bubbles.js";
import Fuse from "fuse.js";
import SearchBar from "material-ui-search-bar";
import _, { map } from "underscore";

const BUILDINGS = [
  "Electrical and Computer Engineering Building",
  "Hydrosystems Lab",
  "National Center for Supercomputing Applications",
  "Newmark (Crane Bay)",
  "Siebel Center",
  "Digital Computer Laboratory",
  "Grainger Loading Dock",
  "Talbot Lab",
  "Campus Instructional Facility (CIF)",
  "Materials Science & Engineering Building",
  "Transportation Building",
  "Everitt Laboratory",
  "Sidney Lu Mechanical Engineering Building",
  "Loomis Laboratory",
  "Natural History Building",
  "Engineering Hall",
  "Springfield",
  "North Quad",
  "Matthews Ave",
  "Observatory",
];

const LOCS_TO_BUILDINGS = {
  BQ: "Bardeen Quad",
  NQ: "North Quad",
  SPF: "Springfield",
  MATT: "Matthews Ave",
  EV: "Everitt Laboratory",
  ECEB: "Electrical and Computer Engineering Building",
  CIF: "Campus Instructional Facility",
  TAL: "Talbot Lab",
  TP: "Transportation Building",
  NM: "Newmark (Crane Bay)",
  LL: "Loomis Laboratory",
  EH: "Engineering Hall",
  HMNTL: "Holonyak Micro and Nanotechnology Lab",
  MSEB: "Materials Science & Engineering Building",
  DCL: "Digital Computer Laboratory",
  SC: "Siebel Center for Computer Science",
  MEL: "Mechanical Engineering Laboratory",
  LUMEB: "Sidney Lu Mechanical Engineering Building",
  NHB: "Natural History Building",
  HYDRO: "Hydrosystems Lab",
  NCSA: "National Center for Supercomputing Applications",
  NCPD: "North Campus Parking Deck",
  Observatory: "Observatory",
};

const LOCS_TO_BUILDING_SHORT = {
  BQ: "Bardeen Quad",
  NQ: "North Quad",
  SPF: "Springfield",
  MATT: "Matthews Ave",
  EV: "Everitt Lab",
  ECEB: "ECEB",
  CIF: "CIF",
  TAL: "Talbot Lab",
  TP: "Transportation Building",
  NM: "Newmark (Crane Bay)",
  LL: "Loomis Lab",
  EH: "Engineering Hall",
  HMNTL: "HMNTL",
  MSEB: "MSEB",
  DCL: "DCL",
  SC: "Siebel Center",
  MEL: "Mech E Lab",
  LUMEB: "Sidney Lu MEB",
  NHB: "NHB",
  HYDRO: "Hydrosystems Lab",
  NCSA: "NCSA",
  NCPD: "NCPD",
  Observatory: "Observatory",
};

export default class Exhibits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbleAt: "All",
      affiliation: "All",
      rso: "All",
      tag: [],
      query: "",
      exhibits: null,
    };
  }

  componentDidMount() {
    if (!this.state.exhibits) {
      fetch(getHost() + "/assets/data/exhibits.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => this.setState({ exhibits: result }));
    }
  }

  handleClick = (name) => {
    this.setState({ bubbleAt: name });
  };

  onScheduleItemClick = (location) => {
    const filtered = BUILDINGS.filter((buildingName) =>
      location.includes(buildingName)
    );
    if (!filtered.length) return;
    this.handleClick(filtered[0]);
  };

  render() {
    const {
      bubbleAt,
      exhibits,
      affiliation,
      rso,
      department,
      t_audience,
      query,
      tag,
    } = this.state;

    const exhibitsWithLocations = exhibits
      ? exhibits.map(({ location, ...other }) => {
          return {
            location: LOCS_TO_BUILDING_SHORT[location] || location,
            locationLong: LOCS_TO_BUILDINGS[location] || location,
            ...other,
          };
        })
      : null;

    const noFilter =
      bubbleAt == "All" &&
      affiliation == "All" &&
      rso == "All" &&
      department == "All" &&
      t_audience == "All" &&
      query == "" &&
      tag.length == 0;

    const filterFiltered = exhibitsWithLocations
      ? exhibitsWithLocations.filter(
          ({
            locationLong,
            exhibitAffiliation,
            rsoName,
            departmentAffiliation,
            audience,
            tag1,
            tag2,
            tag3,
          }) => {
            if (bubbleAt !== "All" && !locationLong.includes(bubbleAt))
              return false;
            if (affiliation !== "All" && affiliation !== exhibitAffiliation)
              return false;
            if (rso !== "All" && rso !== rsoName) return false;
            if (department !== "All" && department !== departmentAffiliation)
              return false;
            if (t_audience !== "All" && t_audience !== audience) return false;
            if (tag.length) {
              let match = false;
              tag.forEach((i) => {
                if (tag1 === i || tag2 === i || tag3 === i) match = true;
              });
              if (!match) return false;
            }
            return true;
          }
        )
      : null;

    const fuseOptions = {
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      useExtendedSearch: true,
      ignoreLocation: true,
      keys: [
        "event",
        "location",
        "locationLong",
        "departmentAffiliation",
        "rsoName",
        "tag1",
        "tag2",
        "tag3",
      ],
    };

    const fuse = filterFiltered ? new Fuse(filterFiltered, fuseOptions) : null;
    const cleanedQuery = query?.trim();

    const searchResult =
      fuse && cleanedQuery && cleanedQuery.length >= 1
        ? fuse.search(cleanedQuery)
        : null;

    const filteredUnordered =
      cleanedQuery && searchResult?.length
        ? searchResult.map((result) => result.item)
        : filterFiltered;

    const filtered = filteredUnordered
      ? _.sortBy(filteredUnordered, ({ event, rsoName }) => event || rsoName)
      : null;
    console.log(filtered);

    return (
      <div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="relative text-center col-span-3">
            <span className="relative inline-block date uppercase font-medium text-theme-purp text-xl">
              Map
            </span>
            <br />
            <div className="text-gray-600 text-sm font-light mb-5 text-ellipsis">
              Now Showing <span className="font-bold">{bubbleAt}</span>
            </div>
            <div className="inline-block relative">
              <img
                className="uiuc-map relative mx-auto shadow-lg"
                src="/assets/images/campus_map_1572x1028.png"
              />
              <Bubbles current={bubbleAt} onBubbleClick={this.handleClick} />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 text-center">
            <SearchBar
              className={`w-5/6 mr-auto`}
              value={query}
              onChange={(e) => this.setState({ query: e })}
              onRequestSearch={() => {}}
              placeholder="Search Location, Deparment, or Exhibit"
              cancelOnEscape={true}
              onCancelSearch={(e) => this.setState({ query: "" })}
            />
            <br />
            {/* <span className="relative inline-block date uppercase font-medium text-theme-purp text-xl mb-5">
							Filters
						</span>
						<br /> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Filter
                name="Location"
                img_src="/assets/ui/location.svg"
                color="bg-red-100"
                menuItems={BUILDINGS.sort().map((text) => {
                  return { text: text, onClick: (e) => this.handleClick(e) };
                })}
                current={bubbleAt}
              />
              {/*<Filter
								name="Affiliation"
								img_src="/assets/ui/grid.svg"
								color="bg-green-100"
								menuItems={[ 'All' ]
									.concat(
										_.keys(
											_.countBy(exhibits, function(data) {
												return data.exhibitAffiliation;
											})
										)
									)
									.map((text) => {
										return { text, onClick: (e) => this.setState({ affiliation: e }) };
									})}
								current={affiliation}
								/>*/}
              <Filter
                name="Group"
                img_src="/assets/ui/users.svg"
                color="bg-green-100"
                menuItems={[]
                  .concat(
                    _.keys(
                      _.countBy(exhibits, function (data) {
                        return data.rsoName;
                      })
                    )
                  )
                  .filter((i) => i.length && i !== "undefined")
                  .sort()
                  .map((text) => {
                    return { text, onClick: (e) => this.setState({ rso: e }) };
                  })}
                current={rso}
              />
              {/*<Filter
								name="Department"
								img_src="/assets/ui/home.svg"
								color="bg-green-100"
								menuItems={[ 'All' ]
									.concat(
										_.keys(
											_.countBy(exhibits, function(data) {
												return data.departmentAffiliation;
											})
										)
									)
									.filter((i) => i.length && i !== 'undefined')
									.map((text) => {
										return {
											text,
											onClick: (e) => this.setState({ department: e })
										};
									})}
								current={department}
							/>
							<Filter
								name="Target Audience"
								img_src="/assets/ui/users.svg"
								color="bg-yellow-100"
								menuItems={[ 'All' ]
									.concat(
										_.keys(
											_.countBy(exhibits, function(data) {
												return data.audience;
											})
										)
									)
									.filter((i) => i.length && i !== 'undefined')
									.map((text) => {
										return {
											text,
											onClick: (e) => this.setState({ t_audience: e })
										};
									})}
								current={t_audience}
								/>*/}
              <Filter
                name="Tags (Match Any)"
                img_src="/assets/ui/tag.svg"
                color="bg-indigo-100"
                menuItems={_.uniq(
                  _.flatten([
                    _.keys(
                      _.countBy(exhibits, function (data) {
                        return data.tag1;
                      })
                    ),
                    _.keys(
                      _.countBy(exhibits, function (data) {
                        return data.tag2;
                      })
                    ),
                    _.keys(
                      _.countBy(exhibits, function (data) {
                        return data.tag3;
                      })
                    ),
                  ])
                )
                  .filter((i) => i.length && i !== "undefined")
                  .sort()
                  .map((text) => {
                    return {
                      text,
                      onClick: (e) => this.setState({ tag: tag.concat([e]) }),
                    };
                  })}
                current={"Select Tags"}
              />
            </div>
            <div className="flex justify-center mt-5 mx-auto">
              {noFilter ? (
                <Button
                  className="mt-8 sm:mt-1 whitespace-nowrap select-none pointer-events-none text-gray-400"
                  style={{ padding: 0, margin: "13px 0 0 0" }}
                  type="beta"
                >
                  Cancel Filters
                </Button>
              ) : (
                <Button
                  className="mt-10 sm:mt-1 whitespace-nowrap select-none"
                  style={{ padding: 0, margin: "13px 0 0 0" }}
                  type="normal"
                  onClick={() =>
                    this.setState({
                      bubbleAt: "All",
                      affiliation: "All",
                      rso: "All",
                      department: "All",
                      t_audience: "All",
                      query: "",
                      tag: [],
                    })
                  }
                >
                  Cancel Filters
                </Button>
              )}
              <div
                style={{
                  borderLeft: "1px solid rgb(229, 231, 235)",
                  height: "20px",
                  margin: "auto 10px",
                }}
              />
              <div className="py-2 text-gray-600">
                {tag.length ? (
                  <div className="">
                    {tag.map((t, i) => (
                      <div
                        key={i}
                        className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-indigo-100 text-gray-900 rounded-full cursor-pointer"
                        onClick={(e) =>
                          this.setState({ tag: _.without(tag, t) })
                        }
                      >
                        <img
                          src="/assets/ui/close.svg"
                          className="h-4 w-4 mr-2"
                        />
                        {t}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-1">No Tags</div>
                )}
              </div>
            </div>
            <hr className="my-5 w-16 mx-auto" />
          </div>
          <div className="w-full flex justify-center items-center col-span-3 lg:col-span-5 px-4">
            {filtered && (
              <div className="w-full max-w-screen-xl">
                <Paginate
                  items={filtered}
                  onClick={() => {}}
                  itemsPerPage={5}
                  center
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
