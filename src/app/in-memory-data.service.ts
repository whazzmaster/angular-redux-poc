import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const analyses = [
      { id: 11, name: 'Analysis One' },
      { id: 12, name: 'MAX TEST' },
      { id: 13, name: 'Everything (24 hour)' },
      { id: 14, name: 'Zach Analysis' },
    ];
    return { analyses };
  }
}
