import Card from "../components/Card/Card";

const products = [
  {
    facultyName: "CA. Nitin Goel",
    subject: "Principles & Practice of Accounting",
    format: "USB",
    studyMaterial: "Hardbook",
    exam: "CA Foundation",
    courseType: "Regular",
    price: 6749,
    lecture: "NA",
    duration: 118,
    views: 1.5,
    validity: 8,
  },
  {
    facultyName: "CA. Nitin Goel",
    subject: "Principles & Practice of Accounting",
    format: "USB",
    studyMaterial: "Hardbook",
    exam: "CA Foundation",
    courseType: "Regular",
    price: 7999,
    lecture: "NA",
    duration: 118,
    views: 2,
    validity: 12,
  },
  {
    facultyName: "CA. Nitin Goel",
    subject: "Principles & Practice of Accounting",
    format: "Downloadable",
    studyMaterial: "SoftCopy",
    exam: "CA Foundation",
    courseType: "Regular",
    price: 4999,
    lecture: "NA",
    duration: 118,
    views: 1.2,
    validity: 4,
  },
  // {
  //   facultyName: "CA. Nitin Goel",
  //   subject: "Principles & Practice of Accounting",
  //   format: "Downloadable",
  //   studyMaterial: "SoftCopy",
  //   exam: "CA Foundation",
  //   courseType: "Regular",
  //   price: 4999,
  //   lecture: "NA",
  //   duration: 118,
  //   views: 1.2,
  //   validity: 4,
  // },
  // {
  //   comboName: "xyz",
  //   courses: "Principles & Practice of Accounting, business, Maths",
  //   price: 123,
  //   lecture: "NA",
  //   duration: 118,
  //   views: 1.2,
  //   validity: 4,
  // },
];

export default function Home() {
  return (
    <div>
      <main>
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </main>
    </div>
  );
}
