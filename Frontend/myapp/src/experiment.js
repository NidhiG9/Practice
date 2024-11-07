import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CardComponent = ({ value, value1, value2, value3 }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const animateValue = (start, end, setState) => {
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;
    const increment = end > start ? 1 : -1;
    const timer = setInterval(() => {
      current += increment;
      setState(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (inView1) animateValue(0, value, setCount);
  }, [inView1, value]);

  useEffect(() => {
    if (inView2) animateValue(0, value1, setCount1);
  }, [inView2, value1]);

  useEffect(() => {
    if (inView3) animateValue(0, value2, setCount2);
  }, [inView3, value2]);

  useEffect(() => {
    if (inView4) animateValue(0, value3, setCount3);
  }, [inView4, value3]);

  return (
    <div className="row cardMain">
      <div className="col-sm-3 card2">
        <div className="card cardH shadow-lg p-3 mb-5 bg-body rounded" ref={ref1}>
          <div className="card-body">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/happy.png" alt="" />
            <h3 className="increasing_Numbers">{count}</h3>
            <h3 style={{ fontWeight: 600 }}>Happy Clients</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-3 card2">
        <div className="card shadow-lg p-3 mb-5 bg-body rounded" ref={ref2}>
          <div className="card-body">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/project.png" alt="" />
            <h3 className="increasing_Numbers1">{count1}</h3>
            <h3 style={{ fontWeight: 600 }}>Projects</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-3 card2">
        <div className="card shadow-lg p-3 bg-body rounded" ref={ref3}>
          <div className="card-body">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/fuel.png" alt="" style={{ height: "26px", width: "26px" }} />
            <h3 className="increasing_Numbers2">{count2}</h3>
            <h3 style={{ fontWeight: 600, paddingBottom: "-20px" }}>Million Litres Saved</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-3 card2">
        <div className="card shadow-lg p-3 mb-5 bg-body rounded" ref={ref4}>
          <div className="card-body">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/teamw.png" alt="" style={{ width: "60px", height: "60px" }} />
            <h3 className="increasing_Numbers3">{count3}</h3>
            <h3 style={{ fontWeight: 600 }}>Team Members</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
