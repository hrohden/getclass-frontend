import { Moment } from "./Moment";

type Props = {
  moment: Moment;
};

const MomentCard = (props: Props) => {
  return (
    <div>
      <h2>{props.moment.title}</h2>
      <p>{props.moment.description}</p>
    </div>
  );
};

export default MomentCard;
