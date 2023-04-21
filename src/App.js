import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SmallExample from './BTable';
import VerticalBar from './VerticalBar';

export default function App() {
  let Mydata = [
    { name: 'intel', value: 98, ptamba: 'Yes' },
    { name: 'amd', value: 40, ptamba: 'No' },
    { name: 'amd', value: 54, ptamba: 'Yes' },
    { name: 'amd', value: 82, ptamba: 'No' },
    { name: 'applied ', value: 700, ptamba: 'No' },
    { name: 'applied ', value: 370, ptamba: 'Yes' },
    { name: 'applied ', value: 170, ptamba: 'Yes' },
  ];

  let maxValue = 0;
  let yesCount = 0;
  let noCount = 0;

  Mydata.forEach((item) => {
    if (item.value > maxValue) {
      maxValue = item.value;
    }
    if (item.ptamba === 'Yes') {
      yesCount = yesCount + 1;
    }
    if (item.ptamba === 'No') {
      noCount = noCount + 1;
    }
  });
  console.log(maxValue);
  console.log(yesCount);
  console.log(noCount);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 border p-1  text-center">P Tamba</div>
          <div className="col-3 border p-1   text-center">Tamba Status</div>
          <div className="col-6 border p-1   text-center">Demo Count</div>
        </div>

        <div className="row">
          <div className="col-2 border p-1  text-center  "> No</div>

          <div className="col-9 border p-1   text-center">
            {Mydata.map((item) => {
              return (
                <div className="row ">
                  <div className="col-4  p-1   text-center ">{item.name}</div>
                  <div className="col-7  p-1  text-center ">
                    <VerticalBar total={maxValue} count={item.value} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr className="table-active">
              <th className="col-3">P tamba</th>
              <th className="col-3">Tamba Status</th>
              <th className="col-6">Demo count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={`${yesCount + 1}`}>Yes</td>
            </tr>
            {Mydata.map((item) => {
              if (item.ptamba === 'Yes') {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>
                      {' '}
                      <VerticalBar total={maxValue} count={item.value} />
                    </td>
                  </tr>
                );
              }
            })}
            <tr>
              <td rowSpan={`${noCount + 1}`}>No</td>
            </tr>
            {Mydata.map((item) => {
              if (item.ptamba === 'No') {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>
                      {' '}
                      <VerticalBar total={maxValue} count={item.value} />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
