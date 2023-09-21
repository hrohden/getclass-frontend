import { Moment } from "./Moment";

type Props = {
  moment: Moment;
};

const MomentCard = (props: Props) => {
  return (
    <div>
      <div>
        <div>{props.moment.title}</div>
        <div>{props.moment.headline}</div>
      </div>
      <div>
        <p>{props.moment.description}</p>
      </div>
      <div>
        <button>Favorite</button>
      </div>
    </div>
  );
};

export default MomentCard;
