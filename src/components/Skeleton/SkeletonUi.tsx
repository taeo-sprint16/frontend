import { Fragment } from 'react';

const skeletonDataIndexList: Array<number> = [1, 2, 3, 4, 5, 6];

const SkeletonUi = () => {
  return (
    <Fragment>
      {skeletonDataIndexList.map((index) => (
        <li className="answersList__item" key={index}>
          <div>
            <h3 className="answersList__item--answer">답변{index}</h3>
            <p className="answersList__item--createdAt">생성일자{index}</p>
          </div>
          <button className="modalButton">
            <img src="/modalButton.svg" alt="상세모달창 띄우는 버튼" />
          </button>
        </li>
      ))}
    </Fragment>
  );
};

export default SkeletonUi;
