import { Publisher, TicketUpdatedEvent, Subjects } from "@yzhtickets/common";
import { natsWrapper } from "../../nats-wrapper";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
