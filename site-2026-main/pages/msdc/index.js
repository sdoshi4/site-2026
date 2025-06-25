import Content from "@/content";
import Info from "../../components/content/info.js";
import Button from "@/button";

export default function MSDC() {
  return (
    <Content title="Middle School Design Competition">
      <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5 mb-2">
          Our Middle School Design Competition (MSDC) is an engineering-focused competition on Friday, April 4. Students work in teams of 3-5 to create a design and presentation that will be evaluated at the end of the competition. It’s a great opportunity for students to gain hands-on engineering design and teamwork experience!
          <br />
          <br />
          <Info>
            We have decided not to release the themes this year to ensure a fair competition.
          </Info>
          <br />
          <div className="mt-6 flex justify-center">
            <Button
              type="big"
              className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2fJYy1U5IZj5itydIiZhaLBCScJIMVwY6_qIAD3jvTn3VFA/viewform?usp=dialog"
              target="_blank"
            >
              MSDC Registration
            </Button>
          </div>
        </div>
        <div className="h-7"></div>
      </div>
    </Content>
  );
}
