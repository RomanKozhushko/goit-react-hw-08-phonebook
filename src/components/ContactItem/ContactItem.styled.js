import styled from 'styled-components';


export const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin-bottom: 24px;
  margin-left: 15px;
  background-image: linear-gradient(to left, white, steelblue);
  border-radius: 2px;
`;
export const NumByOrder = styled.span`
  margin-right: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: steelblue;
  border: 0;
  margin-left: -32px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 5px 10px;
`;
export const TelNum = styled.span`
  margin-left: 5px;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  font-weight: 700;
`;
export const TelName = styled.span`
  margin-left: 5px;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  font-weight: 700;
`;
export const DelBtn = styled.button`
  margin-left: auto;
  margin-right: 20px;
  padding: 5px 20px 4px 20px;
  border: 0;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: steelblue;
  border-radius: 3px;
`;