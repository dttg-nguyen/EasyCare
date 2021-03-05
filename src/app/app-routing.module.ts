import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicalExamComponent } from './medical-exam/medical-exam.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { EPrescriptionComponent } from './e-prescription/e-prescription.component';
import { SymptomsSelectionComponent } from './symptoms-selection/symptoms-selection.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'medical-exam', component: MedicalExamComponent },
  { path: 'symptoms-selection', component: SymptomsSelectionComponent },
  { path: 'e-prescription', component: EPrescriptionComponent },
  { path: 'pharmacies', component: PharmaciesComponent },
  { path: 'clinics', component: ClinicsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
