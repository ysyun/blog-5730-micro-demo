import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureShellModule } from './admin-feature-shell.module';

describe('AdminFeatureShellModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AdminFeatureShellModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(AdminFeatureShellModule).toBeDefined();
    });
});
