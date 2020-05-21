import { async, TestBed } from '@angular/core/testing';
import { AdminAdminFeaturePageModule } from './admin-admin-feature-page.module';

describe('AdminAdminFeaturePageModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AdminAdminFeaturePageModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(AdminAdminFeaturePageModule).toBeDefined();
    });
});
