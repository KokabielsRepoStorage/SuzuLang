import { QLabel } from '@nodegui/nodegui'
import { QMainWindow } from '@nodegui/nodegui'
'use strict';
const win = new QMainWindow();
    undefined;
    
const label = new QLabel(win);
label.setText("'Testing'");
label.setInlineStyle(" 'nothing'");
win.show();
global.win = win;
