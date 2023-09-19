import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Moment } from "./Moment";

type Props = {
  moment: Moment;
};

const MomentCard = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.moment.title}</CardTitle>
        <CardDescription>{props.moment.headline}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.moment.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Favorite</Button>
      </CardFooter>
    </Card>
  );
};

export default MomentCard;
