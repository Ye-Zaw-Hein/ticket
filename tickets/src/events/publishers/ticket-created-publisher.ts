import { Publisher, TicketCreatedEvent, Subjects } from "@yzhtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
