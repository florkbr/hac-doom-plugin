import React from 'react';
import { Title } from '@patternfly/react-core';
import './PluginEntry.scss';

const PluginEntry = () => {
  const doomURL =
    window.location.href.indexOf('beta') > -1 ? '/beta/api/plugins/hac-doom-plugin/doom.html' : '/api/plugins/hac-doom-plugin/doom.html';
  return (
    <div className="doom-root">
      <div id="monitor" className="on">
        <div id="screen">
          <div id="crt">
            <div className="scanline" />
            <div className="terminal">
              <iframe className="doom-iframe" src={doomURL} />
            </div>
          </div>
        </div>
        <Title headingLevel="h1" data-testid="page-header">
          HAC Doom Plugin
        </Title>
      </div>
    </div>
  );
};

export default PluginEntry;
