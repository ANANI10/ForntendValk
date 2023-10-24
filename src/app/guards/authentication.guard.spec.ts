import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard], // Ajoutez le service dans les providers
    });
    guard = TestBed.inject(AuthenticationGuard); // Injectez le service dans votre test
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Vérifiez que le garde est créé avec succès
  });
});
