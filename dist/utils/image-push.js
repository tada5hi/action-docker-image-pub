/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */
import core from '@actions/core';
import { useDocker } from './instance';
export async function pushImage(name, authConfig) {
    const image = typeof name === 'string' ?
        await useDocker().getImage(name) :
        name;
    const stream = await image.push({
        authconfig: authConfig,
    });
    core.notice('Pushing image.');
    await new Promise((resolve, reject) => {
        useDocker().modem.followProgress(stream, (err, res) => {
            if (err) {
                core.error(err);
                return reject(err);
            }
            core.info('Pushed image');
            return resolve(res);
        });
    });
}
//# sourceMappingURL=image-push.js.map