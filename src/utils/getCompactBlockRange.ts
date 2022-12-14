import { ServiceError } from 'grpc';
import { CompactBlock } from '../proto/chain_pb';
import {
  CompactBlockRangeRequest,
  ObliviousQueryClient,
} from '../proto/oblivious_grpc_web_pb';

export const client = new ObliviousQueryClient(
  'http://localhost:8080',
  null,
  null
);

export const getCompactBlockRange = () => {
  const compactBlockRangeRequest = new CompactBlockRangeRequest();
  compactBlockRangeRequest.setChainId('penumbra-testnet-harpalyke');
  compactBlockRangeRequest.setStartHeight(1);
  // compactBlockRangeRequest.setEndHeight(33444);
  compactBlockRangeRequest.setKeepAlive(true);

  const stream = client.compactBlockRange(compactBlockRangeRequest);

  stream.on('error', (error: ServiceError | null) => {
    console.log({ error });
  });

  stream.on('data', (res: CompactBlock) => {
    const height = res.getHeight();
    const notePayloads = res.getNotePayloadsList();
    const nullifiers = res.getNullifiersList();
    const blockRoot = res.getBlockRoot();
    const epochRoot = res.getEpochRoot();
    const quarantined = res.getQuarantined();
    const slashed = res.getSlashedList();
    const proposalStarted = res.getProposalStarted();
    const fmdParameters = res.getFmdParameters();

    console.log({
      height,
      nullifiers,
      notePayloads,
      blockRoot,
      epochRoot,
      quarantined,
      slashed,
      proposalStarted,
      fmdParameters,
    });
  });

  stream.on('end', () => {
    console.log('stream ended!');
  });
};
