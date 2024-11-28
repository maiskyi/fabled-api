import { TransportConfig } from './services/transport';
import { ConfigConfig } from './services/config';

export interface MailerConfig extends TransportConfig, ConfigConfig {}
