import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@yzhtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
