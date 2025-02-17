import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OnepAiClient } from '@services/openai';

import { GenStoryCommand } from './gen-story.command';

@CommandHandler(GenStoryCommand)
export class GenStoryHandler implements ICommandHandler<GenStoryCommand> {
  constructor(private openai: OnepAiClient) {}

  async execute({ story }: GenStoryCommand) {
    // const { heroId, dragonId } = command;
    // const hero = this.repository.findOneById(+heroId);

    // hero.killEnemy(dragonId);

    // await this.repository.persist(hero);

    return true;

    // // "ICommandHandler<KillDragonCommand>" forces you to return a value that matches the command's return type
    // return {
    //   actionId: crypto.randomUUID(), // This value will be returned to the caller
    // };
  }
}
