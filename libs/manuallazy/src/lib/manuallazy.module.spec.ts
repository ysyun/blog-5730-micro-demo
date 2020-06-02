import { async, TestBed } from '@angular/core/testing';
import { ManuallazyModule } from './manuallazy.module';

describe('ManuallazyModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ManuallazyModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(ManuallazyModule).toBeDefined();
    });
});
