/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 * @private
 */

import LocalForageStoreAdapter from '@ciscospark/storage-adapter-local-forage';
import LocalStorageStoreAdapter from '@ciscospark/storage-adapter-local-storage';

export default {
  device: {
    enableInactivityEnforcement: true
  },
  storage: {
    boundedAdapter: new LocalStorageStoreAdapter(`web-client-internal`),
    unboundedAdapter: new LocalForageStoreAdapter(`web-client-internal`)
  }
};