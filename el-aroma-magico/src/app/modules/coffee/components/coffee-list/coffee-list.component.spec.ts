import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../../services/coffee-service/coffee.service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [CoffeeListComponent],

  //   })
  //     .compileComponents();

  //   fixture = TestBed.createComponent(CoffeeListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  const mockCoffeeList = [
    { id: 1, nombre: 'Colombiano', tipo: 'Café de Origen', region: 'Antioquia' },
    { id: 2, nombre: 'Brasileño', tipo: 'Blend', region: 'Minas Gerais' },
    { id: 3, nombre: 'Etíope', tipo: 'Café de Origen', region: 'Yirgacheffe' },
  ];

  const mockCoffeeService = {
    listCoffee: () => of(mockCoffeeList)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CoffeeListComponent],
      providers: [
        { provide: CoffeeService, useValue: mockCoffeeService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a table with s list of 3 types of coffee', () => {
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

});
