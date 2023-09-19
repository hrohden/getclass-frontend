import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Moment } from "./Moment";

type Props = {
  moment: Moment;
};

const MomentCard = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.moment.title}</CardTitle>
        <CardDescription>{props.moment.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default MomentCard;
