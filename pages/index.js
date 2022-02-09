import Card from "../components/Card/Card";

import { useQuery, gql } from "@apollo/client";
import ClientOnly from "../components/ClientOnly";

const QUERY = gql`
  query {
    products(filters: { isCombo: { eq: false } }) {
      meta {
        pagination {
          page
          total
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          isCombo
          videoLecture {
            data {
              id
              attributes {
                subject {
                  data {
                    id
                    attributes {
                      subjectName
                      exam {
                        data {
                          id
                          attributes {
                            examName
                          }
                        }
                      }
                    }
                  }
                }
                teacher {
                  ...TeacherNameImage
                }
                batch
                hours
                startDate
                endDate
              }
            }
          }
          combo {
            data {
              id
              attributes {
                comboName
                videoLecture {
                  data {
                    id
                    attributes {
                      subject {
                        data {
                          id
                          attributes {
                            subjectName
                            exam {
                              data {
                                id
                                attributes {
                                  examName
                                }
                              }
                            }
                          }
                        }
                      }
                      teacher {
                        ...TeacherNameImage
                      }
                    }
                  }
                }
              }
            }
          }
          view
          validity
          format
          studyMaterial
          price
        }
      }
    }
  }

  fragment TeacherNameImage on TeacherEntityResponse {
    data {
      id
      attributes {
        teacherName
        teacherImage {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
`;

const products1 = [
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
];

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return null;
  }

  const products = data.products.data;
  const productsData = products.map((product) => {
    const {
      id,
      attributes: {
        format,
        isCombo,
        price,
        studyMaterial,
        validity,
        view,
        videoLecture: {
          data: {
            attributes: {
              batch,
              startDate,
              endDate,
              hours,
              subject: {
                data: {
                  attributes: {
                    subjectName,
                    exam: {
                      data: {
                        attributes: { examName },
                      },
                    },
                  },
                },
              },
              teacher: {
                data: {
                  attributes: {
                    teacherName,
                    teacherImage: {
                      data: {
                        attributes: { url },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } = product;
    return {
      id,
      format,
      isCombo,
      price,
      studyMaterial,
      validity,
      view,
      batch,
      startDate,
      endDate,
      hours,
      subjectName,
      examName,
      teacherName,
      url,
    };
  });

  console.log(productsData);

  return (
    <div>
      <ClientOnly>
        <main>
          {productsData.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </main>
      </ClientOnly>
    </div>
  );
}
