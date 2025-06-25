import Profile from '@/profile';
import Content from '@/content';

// const csv = require('csvtojson');
// const csvFilePath = "./pages/about-us/meet-the-committee/people.csv"

// csv()
//     .fromFile(csvFilePath)
//     .then((jsonArray) => {
//         const objectsList = jsonArray.map((row) => {
//             const object = {};
//             for (const key in row) {
//                 object[key] = row[key];
//             }
//             return object;
//         });
//         console.log(objectsList);
//     });

const COMMITTEE_HEADSHOTS = [
  {
    img: "alicia.jpg",
    Name: "Alicia Kim",
    Position: "Co-Director",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "alyssa.jpg",
    Name: "Alyssa Huang",
    Position: "Co-Director",
    Class: "Masters",
    Major: "Electrical Engineering",
  },
  {
    img: "adithi.jpg",
    Name: "Adithi Bikkavilli",
    Position: "Secretary/Treasurer",
    Class: "Sophomore",
    Major: "Computer Engineering",
  },
  {
    img: "huamin1.jpg",
    Name: "Huamin Gao",
    Position: "Director of Facilities & Equipment",
    Class: "Senior",
    Major: "Chemical Engineering",
  },
  {
    img: "aparna.jpg",
    Name: "Aparna Kamath",
    Position: "Director of Exhibits",
    Class: "Junior",
    Major: "Physics",
  },
  {
    img: "ovi.jpg",
    Name: "Oviyan Rathi",
    Position: "Director of Traffic & Safety",
    Class: "Senior",
    Major: "Industrial Engineering",
  },
  {
    img: "shiv.jpg",
    Name: "Shivaditya Gohil",
    Position: "Senior Corporate Director",
    Class: "Senior",
    Major: "Computer Engineering",
  },
  {
    img: "roshni.jpg",
    Name: "Roshni Mathew",
    Position: "Senior Corporate Director",
    Class: "Junior",
    Major: "Computer Engineering",
  },
  {
    img: "aarya.jpg",
    Name: "Aarya Patel",
    Position: "Junior Corporate Director",
    Class: "Junior",
    Major: "Civil Engineering",
  },
  {
    img: "madeline.png",
    Name: "Madeline Kim",
    Position: "Junior Corporate Director",
    Class: "Freshman",
    Major: "Industrial Engineering",
  },
  {
    img: "vishnuh.jpg",
    Name: "Vishnuh Bala",
    Position: "Director of Special Events",
    Class: "Junior",
    Major: "Aerospace Engineering",
  },
  {
    img: "BlankProfile.png",
    Name: "Arpit Bansal",
    Position: "Director of Special Events",
    Class: "Junior",
    Major: "Computer Science",
  },
  {
    img: "Yoon.jpg",
    Name: "Yoon Lee",
    Position: "Director of Marketing",
    Class: "Senior",
    Major: "Chemical Engineering",
  },
  {
    img: "emily.jpg",
    Name: "Emily Liu",
    Position: "Director of Marketing",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "aditi.jpg",
    Name: "Aditi Shah",
    Position: "Director of Marketing",
    Class: "Senior",
    Major: "Computer Science",
  },
  {
    img: "shreya.jpg",
    Name: "Shreya Gosavi",
    Position: "Visitor's Information Director",
    Class: "Sophomore",
    Major: "CS + Crop Sciences",
  },
  {
    img: "maddieconrad.jpg",
    Name: "Maddie Conrad",
    Position: "Visitor's Information Director",
    Class: "Junior",
    Major: "Physics",
  },
  {
    img: "keya.jpg",
    Name: "Keya Patel",
    Position: "Director of Judging and Awards",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "katerina.jpg",
    Name: "Katerina Baxter",
    Position: "Middle School Design Director",
    Class: "Senior",
    Major: "Bioengineering",
  },
  {
    img: "manasi2.jpg",
    Name: "Manasi Bhargava",
    Position: "High School Design Director",
    Class: "Sophomore",
    Major: "Engineering Mechanics",
  },
  {
    img: "karan.jpg",
    Name: "Karan Jain",
    Position: "Startup Showcase Director",
    Class: "Senior",
    Major: "Industrial Engineering",
  },
  {
    img: "archir.jpg",
    Name: "Archir Luhana",
    Position: "Director of Advancements",
    Class: "Sophomore",
    Major: "Electrcal Engineering",
  },
  {
    img: "kate.jpg",
    Name: "Kate Pactol",
    Position: "Junior Director of Hospitality",
    Class: "Sophomore",
    Major: "Mechanical Engineering",
  },
  {
    img: "arryan.jpg",
    Name: "Arryan Kanodia",
    Position: "Senior Director of Hospitality",
    Class: "Senior",
    Major: "Industrial Engineering",
  },
  {
    img: "tushar.jpg",
    Name: "Tushar Jain",
    Position: "Senior Director of Technology",
    Class: "Junior",
    Major: "Industrial Engineering",
  },
  {
    img: "atsi.jpg",
    Name: "Atsi Gupta",
    Position: "Junior Director of Technology",
    Class: "Junior",
    Major: "Computer Engineering",
  },
  {
    img: "shaan.jpg",
    Name: "Shaan Doshi",
    Position: "Junior Director of Technology",
    Class: "Sophomore",
    Major: "Computer Science",
  },
  {
    img: "tessa.jpg",
    Name: "Tessa Waldhoff",
    Position: "Junior Director of Outreach",
    Class: "Freshman",
    Major: "Bioengineering",
  },
  {
    img: "hiruni.jpg",
    Name: "Hiruni Bopearatchy",
    Position: "Junior Director of Outreach",
    Class: "Sophomore",
    Major: "Mechanical Engineering",
  },
  {
    img: "ella.jpg",
    Name: "Ella Greer",
    Position: "Senior Director of Outreach",
    Class: "Junior",
    Major: "Aerospace Engineering",
  }
]

export default function MeetTheCommittee() {
  return (
    <div className="flex flex-row flex-wrap justify-center w-10/12 mx-auto">
      {COMMITTEE_HEADSHOTS.map((c) => (
        <Profile {...c} key={c.Name} />
      ))}
    </div>
  )
}
