import React from 'react';

const VerticalBar = ({ bgcolor, total, count }) => {
  const Parentdiv = {
    height: '30px',
    width: '100%',
    display: 'flex',

    // backgroundColor: 'whitesmoke',
    // borderRadius: 40,
    // margin: 50,
  };
  console.log((count / total) * 100);
  const Childdiv = {
    height: '100%',
    width: `${(count / total) * 100}%`,
    backgroundColor: '#00F',
    // borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 2,
    color: 'black',
    fontWeight: 500,
    // border: '2px solid black',
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
      <div style={progresstext}>{`${count}`}</div>
    </div>
  );
};

export default VerticalBar;
