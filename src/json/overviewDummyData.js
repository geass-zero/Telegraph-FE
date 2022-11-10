import Handshake from './../assets/images/Handshake.jpg';
import Lock from './../assets/images/lock.jpg';
import User from './../assets/images/user.jpg';

const dummyData = [
  {
    title: 'How they work?',
    icon: Handshake,
    sub_title: 'Keeping it Simple',
    para: (
      <p>
        Telegraph nodes are lightweight programs that rely on the data provided
        by full nodes of blockchains. Each Telegraph node operates
        independently, but requires a threshold of signatures from its peers in
        order to initiate a transaction within telegraph smart contracts.
        <p>
          Nodes that complete transactions get rewarded with Telegraph tokens.
        </p>
      </p>
    ),
  },
  {
    title: 'Why they are safe?',
    icon: Lock,
    sub_title: 'Thresholds & Time',
    para: (
      <p>
        Telegraph nodes & smart contracts have 2 primary means of validating
        authorized transaction requests: Signature thresholds and the time spent
        within the network.
        <p>
          A threshold of signatures representing a subset of the network must be
          sent to a telegraph Smart contract.
        </p>
        <p>
          That subset of signatures must represent a majority of time spent
          within the network.
        </p>
      </p>
    ),
  },
  {
    title: 'Who can run a node?',
    icon: User,
    sub_title: 'In the spirit of decentralization',
    para: (
      <p>
        Anyone can run a node and join the telegraph network. All participants
        must pay a fee in a token supported by telegraph smart contracts.
        Supported tokens can be found here
      </p>
    ),
  },
];
export default dummyData;
