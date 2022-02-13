import Card from "../components/Card/Card";
import { useQuery, gql } from "@apollo/client";

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

const videoLectures = () => {
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
  return (
    <main>
      {productsData.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </main>
  );
};

export default videoLectures;
