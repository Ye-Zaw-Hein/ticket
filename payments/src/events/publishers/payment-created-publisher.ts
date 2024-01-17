import { Subjects, Publisher, PaymentCreatedEvent } from "@yzhtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
