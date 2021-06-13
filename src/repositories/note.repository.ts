// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Note, NoteRelations } from '../models';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.id,
  NoteRelations
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Note, dataSource);
  }
}
