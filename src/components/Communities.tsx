import React from "react";
import axios from "axios";
import styled from "styled-components";

interface IHouses {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

const Communities = () => {
  const [apiData, setApiData] = React.useState<IHouses[]>();
  React.useEffect(() => {
    fetchDataApi();
  }, []);

  //fetching data using async await
  // const fetchDataApi =async()=>{
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();

  //     setApiData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error("something went wrong again please try again",error);

  //   }
  // }

  const fetchDataApi = () => {
    axios
      .get(
        "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json"
      )
      .then((res) => {
        const fetchedData = res.data;
        setApiData(fetchedData);
      })
      .catch((error) => {
        console.error("something went wrong", error);
      });
  };
  return (
    <CommunityWrapper>
      {apiData && apiData.length > 0 && <h2>Communities Information</h2>}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>group</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((info, index) => (
              <tr key={index}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.imgUrl}</td>
                <td>{info.group}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </CommunityWrapper>
  );
};

export default Communities;
const CommunityWrapper = styled.div`
  font-size: 1.5rem;
  > h1 {
    margin-top: 3rem;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    margin: auto;
    width: 100%;
  }
  th {
    background-color: #f68990;
    border: 1px solid red;
    padding: 7px;
  }
  td {
    border: 1px solid red;
    text-align: center;
    padding: 8px;
  }
`;
