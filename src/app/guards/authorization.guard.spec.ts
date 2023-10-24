import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthorizationGuard } from './authorization.guard'; // Assurez-vous d'importer la bonne classe

describe('AuthorizationGuard', () => {
  let guard: AuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationGuard], // Ajoutez le service dans les providers
    });
    guard = TestBed.inject(AuthorizationGuard); // Injectez le service dans votre test
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Vérifiez que le garde est créé avec succès
  });
});
