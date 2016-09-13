// <reference path="../typings/globals/react/index.d.ts" />
import * as React from 'react';

interface IRegisterSettings {
  (title: string, element: React.ComponentClass<any>): void;
}

interface IRegisterIcon {
  (group: string, icon: string, title: string, action: any): void;
}

export interface IExtensionContext {

  registerSettings: IRegisterSettings;
  registerIcon: IRegisterIcon;
  registerReducer: any;

}

export interface IExtensionReducer {
  path: string[];
  reducer: Function;
}

export interface IExtensionInit {
  (context: IExtensionContext): boolean;
}

export interface IExtensionProps {
  extensions: IExtensionInit[];
}
