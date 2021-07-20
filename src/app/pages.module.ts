import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'index',
		pathMatch: 'full',
	},
	{
		path: 'index',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'user',
		loadChildren: () => import('./user-manager/user-manager.module').then(m => m.UserManagerModule)
	},
	{
		path: 'device',
		loadChildren: () => import('./device-manager/device-manager.module').then(m => m.DeviceManagerModule)
	},
	{
		path: 'data',
		loadChildren: () => import('./data-manager/data-manager.module').then(m => m.DataManagerModule)
	},
	{
		path: 'data-visual',
		loadChildren: () => import('./user-manager/user-manager.module').then(m => m.UserManagerModule)
	},
	{
		path: 'data-distribution',
		loadChildren: () => import('./user-manager/user-manager.module').then(m => m.UserManagerModule)
	},
	{
		path: 'prodevice',
		loadChildren: () => import('./product-manager/prodevice-manager.module').then(m => m.ProdeviceManagerModule)
	},
	{
		path: 'firmware',
		loadChildren: () => import('./firmware-manager/firmware-manager.module').then(m => m.FirmwareModule)
	},
	{
		path: 'app',
		loadChildren: () => import('./app-manager/app-manager.module').then(m => m.AppManagerModule)
	},
	{
		path: 'feedback',
		loadChildren: () => import('./feedback-manager/feedback-manager.module').then(m => m.FeedbackModule)
	},
	{
		path: 'message',
		loadChildren: () => import('./message-manager/message.module').then(m => m.MessageModule)
	},
	{
		path: 'order',
		loadChildren: () => import('./order-manager/order-manager.module').then(m => m.OrderManagerModule)
	},
	{
		path: 'settings',
		loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
	},
	// {
	// 	path: 'config-editor',
	// 	loadChildren: () => import('./settings/config-editor/config-editor.module').then(m => m.ConfigEditorModule)
	// },
	{
		path: 'profile',
		loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
	},
	{
		path: 'developers-review',
		loadChildren: () => import('./developer-review/developer-review.module').then(m => m.DeveloperReviewModule)
	},
	{
		path: 'devices-review',
		loadChildren: () => import('./product-review/product-review.module').then(m => m.ProductReviewModule)
	},
	{
		path: 'key',
		loadChildren: () => import('./key-manager/key-manager.module').then(m => m.KeyManagerModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class PagesModule {
}
