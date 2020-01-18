import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditResolver } from '../_resolvers/member-edit.resolver';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(componet: MemberEditComponent) {
        if (componet.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved change wil');
        }
        return true;
    }
}
