import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CabecalhoComponent } from './cabecalho.component'

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent
  let fixture: ComponentFixture<CabecalhoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabecalhoComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(CabecalhoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be render the logo', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.logo p')?.textContent).toContain('Guarde trexos de músicas, citações de livros, pensamentos e suas melhores ideias.')
  })
})
