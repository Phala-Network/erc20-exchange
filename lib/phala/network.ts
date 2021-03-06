export interface NetworkDescription {
    inspectTxUrl: (hash: string) => string
    websocketEndpoint: string
}

export const Networks: Record<string, NetworkDescription> = {
    poc3: {
        inspectTxUrl: (hash) => `https://poc3.phala.network/polkadotjs/#/explorer/query/${hash}`,
        websocketEndpoint: 'wss://poc3a.phala.network/ws'
    },
    poc4: {
        inspectTxUrl: (hash) => `https://poc4.phala.network/polkadotjs/#/explorer/query/${hash}`,
        websocketEndpoint: 'wss://poc4.phala.network/ws'
    },
    localhost: {
        inspectTxUrl: (hash) => `http://localhost:9944/polkadotjs/#/explorer/query/${hash}`,
        websocketEndpoint: 'ws:////localhost:9944'
    }
}
