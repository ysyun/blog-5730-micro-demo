import { async, TestBed } from '@angular/core/testing';
import { LazyviewModule } from './lazyview.module';

describe('LazyviewModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [LazyviewModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(LazyviewModule).toBeDefined();
    });
});
