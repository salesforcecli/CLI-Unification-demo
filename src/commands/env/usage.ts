/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { cli } from 'cli-ux';
import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class Usage extends SfCommand {
  public static description = `show usage and limits for a specific environment
  
  Show usage and limits for a specific environment.
  `;

  public static flags = {
    // TODO: Add cli.table.flags - https://github.com/oclif/cli-ux#clitable
    json: Flags.string({
      description: 'format output as json',
    }),
    targetEnv: Flags.string({
      char: 't',
      description: 'target environment',
    }),
  };

  public async run(): Promise<void> {
    cli.table(
      [
        { Name: 'AnalyticsExternalDataSizeMB', Remaining: '40960', Max: '40960' },
        { Name: 'BOZosCalloutHourlyLimit', Remaining: '20000', Max: '20000' },
        { Name: 'ConcurrentAsyncGetReportInstances', Remaining: '200', Max: '200' },
        { Name: 'ConcurrentEinsteinDataInsightsStoryCreation', Remaining: '5', Max: '5' },
        { Name: 'ConcurrentEinsteinDiscoveryStoryCreation', Remaining: '2', Max: '2' },
        { Name: 'ConcurrentSyncReportRuns', Remaining: '20', Max: '20' },
        { Name: 'DailyAnalyticsDataflowJobExecutions', Remaining: '60', Max: '60' },
        { Name: 'DailyAnalyticsUploadedFilesSizeMB', Remaining: '51200', Max: '51200' },
        { Name: 'DailyApiRequests', Remaining: '99999', Max: '100000' },
        { Name: 'DailyAsyncApexExecutions', Remaining: '250000', Max: '250000' },
        { Name: 'DailyBulkApiBatches', Remaining: '15000', Max: '15000' },
      ],
      {
        Name: {},
        Remaining: {},
        Max: {},
      },
      {
        /* TODO add cli.table.flags */
      }
    );
  }
}
