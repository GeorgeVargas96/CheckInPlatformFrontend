import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../classes/feature';
import { FeatureService } from '../services/feature/feature.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public features: Feature[] | undefined;

  constructor(
    private featureService: FeatureService,
    private router: Router) { }

  public getFeatures(): void{
    this.featureService.getFeatures().subscribe(
      (response: Feature[]) => {
        this.features = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteFeature(featureId: number): void{
    this.featureService.deleteFeature(featureId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFeatures();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onEditFeature(featureId: number): void{
    this.featureService.setEditFeatureId(featureId);
    this.router.navigateByUrl('edit-feature');
  }

  public goToAddFeature(){
    this.router.navigateByUrl('add-feature');
  }

  ngOnInit(): void {
    this.getFeatures();
  }

}
