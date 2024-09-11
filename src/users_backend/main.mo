import Int "mo:base/Int";
import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import List "mo:base/List";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";
import Principal "mo:base/Principal";

actor {

  // Define the artist structure
  type Artist = {
    principal: Principal;
    name: Text;
    bio: Text;
  };

  // Maps artist principals to their information
  let artists : TrieMap.TrieMap<Principal, Artist> = TrieMap.TrieMap(Principal.equal, Principal.hash);

  // Function to sign in an artist
  public shared func signInArtist(principal: Principal, name: Text, bio: Text) : async Bool {
    if (artists.get(principal) != null) {
      return false; // Artist already signed in
    } else {
      let newArtist : Artist = {
        principal = principal;
        name = name;
        bio = bio;
      };
      artists.put(principal, newArtist);
      return true; // Artist signed in successfully
    }
  };

  // Define the NFT structure
  type NFT = {
    id : Nat;
    owner : Principal;
    metadata : Text;
    image : Text;
    name : Text;
    createTime : Time.Time;
  };

  // Define the collection structure
  type Collection = {
    id : Nat;
    creator : Principal;
    name : Text;
    description : Text;
    nfts : List.List<Nat>;
  };

  // NFT contract implementation

  // Stable variables to keep track of the next NFT and collection IDs
  private stable var nextNFTId : Nat = 0;
  private stable var nextCollectionId : Nat = 0;

  // Maps NFT IDs to their owners
  var nftOwners : TrieMap.TrieMap<Nat, Principal> = TrieMap.TrieMap(Nat.equal, Hash.hash);

  // Maps artist principals to lists of their collection IDs
  var artistCollections : TrieMap.TrieMap<Principal, TrieMap.TrieMap<Nat, Collection>> = TrieMap.TrieMap(Principal.equal, Principal.hash);

  // Maps collection IDs to collection information
  var collectionInfo : TrieMap.TrieMap<Nat, Collection> = TrieMap.TrieMap(Nat.equal, Hash.hash);

  // Maps NFT IDs to NFT information
  var nfts : TrieMap.TrieMap<Nat, NFT> = TrieMap.TrieMap(Nat.equal, Hash.hash);

  // Function to create a new collection for an artist
  public shared func createCollection(artist: Principal, collection: Collection) : async Nat {
    let collectionId = nextCollectionId;
    nextCollectionId += 1;
    collectionInfo.put(collectionId, collection);

    // Add collection ID to the artist's collections
    let artistCollectionMap = artistCollections.get(artist);
    switch (artistCollectionMap) {
      case (?existingMap) {
        existingMap.put(collectionId, collection);
      };
      case null {
        let newMap : TrieMap.TrieMap<Nat, Collection> = TrieMap.TrieMap(Nat.equal, Hash.hash);
        newMap.put(collectionId, collection);
        artistCollections.put(artist, newMap);
      };
    };
    return collectionId;
  };

  // Function to create a new NFT
  public shared func createNFT(owner : Principal, metadata : Text, image : Text, name : Text) : async Nat {
    let id = nextNFTId;
    nextNFTId += 1;
    let nft = {
      id = id;
      owner = owner;
      metadata = metadata;
      image = image;
      name = name;
      createTime = Time.now();
    };

    nfts.put(id, nft);
    nftOwners.put(id, owner);
    return id;
  };

  // // Function to get all NFT collections
  // public query func getCollections() : async [Collection] {
  //   return collectionInfo
  // };

  // Function to get NFTs in a specific collection
  // public query func getNFTsInCollection(collectionId: Nat) : async [NFT] {
  //   let collectionOpt = collectionInfo.get(collectionId);
  //   switch (collectionOpt) {
  //     case (?collection) {
  //       let nftIds = collection.nfts;
  //       let nftsList = Array.map<Nat, ?NFT>(nftIds, func (nftId) { nfts.get(nftId) });
  //       return Array.filter<NFT>(nftsList, func (nftOpt) { nftOpt != null });
  //     };
  //     case null {
  //       return [];
  //     };
  //   }
  // };

//   // Function to transfer an NFT within a collection
//   public func transferNFTWithinCollection(collectionId: Nat, from: Principal, to: Principal, id: Nat) : async Bool {
//     if ( from== N or to == null) {
//       return false; // Return false if either the sender or receiver is not signed in
//     };
//     let collectionOpt = collectionInfo.get(collectionId);
//     switch (collectionOpt) {
//       case (?collection) {
//         if (Array.contains(collection.nfts, id)) {
//           let nftOpt = nfts.get(id);
//           switch (nftOpt) {
//             case (?nft) {
//               if (nft.owner == from) {
//                 let updatedNFT = { nft with owner = to };
//                 nfts.put(id, updatedNFT);
//                 nftOwners.put(id, to);

//                 let fromCollectionsOpt = artistCollections.get(from);
//                 let fromCollections = switch (fromCollectionsOpt) {
//                   case (?fc) fc;
//                   case null [];
//                 };
//                 fromCollections := Array.filter(fromCollections, func (nftId) { nftId != id });
//                 artistCollections.put(from, fromCollections);

//                 let toCollectionsOpt = artistCollections.get(to);
//                 let toCollections = switch (toCollectionsOpt) {
//                   case (?tc) tc;
//                   case null [];
//                 };
//                 toCollections := Array.append(toCollections, [id]);
//                 artistCollections.put(to, toCollections);

//                 return true;
//               } else {
//                 return false; // NFT not owned by 'from'
//               }
//             };
//             case null {
//               return false; // NFT not found
//             };
//           }
//         } else {
//           return false; // NFT not found in the collection
//         }
//       };
//       case null {
//         return false; // Collection not found
//       };
//     }
//   };

  // Function to get the owner of an NFT
  public query func icrc7_ownerOf(id: Nat) : async ?Principal {
    return nftOwners.get(id);
  };

  // Function to get the metadata of an NFT
  public query func icrc7_metadata(id: Nat) : async ?Text {
    let nftOpt = nfts.get(id);
    switch (nftOpt) {
      case (?nft) {
        return ?nft.metadata;
      };
      case null {
        return null;
      };
    }
  };
};