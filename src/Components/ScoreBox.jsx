import PropTypes from "prop-types";

const ScoreBox = ({ title, score, bg }) => {
  return (
    <div
      className={`box w-[30%] flex items-center justify-center flex-col gap-[1px] py-3 ${bg} rounded-[10px]`}
    >
      <h1 className="text-[16px]">{title}</h1>
      <span className="text-[28px] font-bold">{score}</span>
    </div>
  );
};

ScoreBox.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
};

export default ScoreBox;
