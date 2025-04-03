# Coinbase MPC

# Table of Contents

- [Introduction](#introduction)
  - [Overview](#overview)
  - [Key Features](#key-features)
- [Directory Structure](#directory-structure)
- [Supported Protocols](#supported-protocols)
- [Design Principles and Secure Usage](#design-principles-and-secure-usage)
- [External Dependencies](#external-dependencies)
  - [OpenSSL](#openssl)
    - [Internal Header Files](#internal-header-files)
    - [RSA OAEP Padding Modification](#rsa-oaep-padding-modification)
  - [Bitcoin Secp256k1 Curve implementation](#bitcoin-secp256k1-curve-implementation)


# Introduction

Welcome to the Coinbase Open Source MPC Library. This repository provides the essential cryptographic protocols that can be utilized to secure asset keys in a decentralized manner using MPC (secure multiparty computation / threshold signing) for blockchain networks.

## Overview

This cryptographic library is based on the MPC library used at Coinbase to protect cryptoassets, with modifications to make it suitable for public use. The library is designed as a general-purpose cryptographic library for securing cryptoasset keys, allowing developers to build their own applications. Coinbase has invested significantly in building a secure MPC library, and it is our hope that this library will help those interested in deploying MPC to do so easily and securely.

## Key Features

- **Safety by Default:** Prioritizing safe cryptographic practices to minimize security errors.
- **Custom Networking Layer:** Versatile integration with any networking setup.
- **General-Purpose Use:** Focuses solely on cryptographic functions, enabling varied applications.
- **Theoretical and Specification Docs:** Includes both theoretical foundations and detailed cryptographic specifications for all primitives and protocols.

The code in this open source library is derived from the code used at Coinbase, with significant changes in order to make it a general-purpose library. In particular, Coinbase applies these protocols with very specific flows as needed in our relevant applications, whereas this code is designed to enable general-purpose use and therefore supports arbitrary flows. In some cases, this generality impacts efficiency, in order to ensure safe default usage.

In addition to releasing the source code for our library, we have published the underlying theoretical work along with detailed specifications. This is a crucial step because merely implementing a theoretical paper can overlook significant errors. At Coinbase, we adhere to the following development process:

1. Review existing research and, if necessary, re-validate the proofs or conduct original research.
2. Draft a detailed specification encompassing all the necessary details for accurately implementing a protocol.
3. After thorough review of the research and specifications, proceed with implementation and code review.

The theory documents and specifications are a considerable contribution within themselves, as a resource for cryptographers and practitioners.

Although this library is designed for general use, we have included examples showcasing common applications:

1. **HD-MPC**: This is the MPC version of an HD-Wallet where the keys are derived according to an HD tree. The library contains the source code for how to generate keys and also to derive keys for the tree (see [src/cbmpc/protocol/hd_keyset_ecdsa_2p.cpp](src/cbmpc/protocol/hd_keyset_ecdsa_2p.cpp)). This can be used to perform a batch ECDSA signature or sequential signatures as shown in the test file, [src/cbmpc/tests/mpc_hdmpc_ecdsa_2p_test.cpp](src/cbmpc/tests/mpc_hdmpc_ecdsa_2p_test.cpp). We stress that this is not BIP32-compliant, but is indistinguishable from it; more details can be found in [docs/theory/mpc-friendly-derivation-theory.pdf](docs/theory/mpc-friendly-derivation-theory.pdf).
2. **ECDSA-MPC with Threshold EC-DKG**: This example showcases how a threshold of parties (or more generally any quorum of parties according to a given access structure) can perform ECDSA-MPC. The code can be found in [src/cbmpc/protocol/ec_dkg.cpp](src/cbmpc/protocol/ec_dkg.cpp) and its usage can be found in [tests/unit/protocol/test_ecdsa_mp.cpp](tests/unit/protocol/test_ecdsa_mp.cpp).
3. **ECDSA-MPC with Threshold Backup**: This example showcases various things. First, the code is in Go, [demos/demos-go/ecdsa-mpc-with-backup/main.go](demos/demos-go/ecdsa-mpc-with-backup/main.go) and therefore showcases how the C++ core library can be used in a Go project. Second, it showcases how different protocols can be combined together to create a full solution. In this case, we use PVE (publicly-verifiable encryption) as a way of creating verifiable backup of keyshares according to an access structure (e.g., a threshold of `t` out of `n` parties). The code shows how the backup can be created and restored. It also shows how the backup can be used to generate a signature. Note that the key generation can be done using the threshold EC-DKG protocol, which is showcased in the previous example. However, for simplicity a normal additive DKG is used in this example.
4. **Various other uses cases, including ZKPs**: The demo code under [demos/demos-cpp](demos/demos-cpp) and [demos/demos-go](demos/demos-go), and the tests under [tests](tests), contain various examples of how the different protocols can be used. Specifically, for the case of ZKPs, the tests can be found under [tests/unit/zk/test_zk.cpp](tests/unit/zk/test_zk.cpp).

The library comes with various tests and checks to increase the confidence in the code including:

- Constant time tests: See `make dudect`
- Unit tests: See `make test`
- Benchmarks: See `make bench`
- Linting: See `make lint`

# Directory Structure

- `docs`: the pdf files that define the detailed cryptographic specification and theoretical documentation (you need to enable git-lfs to get them)
- `src`: contains the cpp library and its unit tests
- `cb-mpc-go`: contains an example of how a go wrapper for the cpp library can be written
- `demos/demos-cpp`: a collection of examples of common use cases
- `demos/demos-go`: an example of how `cb-mpc-go` can be used to run an example use case
- `demos/mocknet`: an example of how a network infra can be implemented
- `scripts`: a collection of scripts used by the Makefile
- `tools/benchmark`: a collection of benchmarks for the library
- `tests/{dudect,integration,unit}`: a collection of tests for the library

# Initial Clone and Setup

After cloning the repo, you need to update the submodules with the following command.

```
git submodule update --init --recursive
```

Furthermore, to obtain the documentations (in pdf form), you need to enable [git-lfs](https://git-lfs.com/)

# Building the code

## Build Modes

There are three build modes available:

- **Dev**: This mode has no optimization and includes debug information for development and debugging purposes.
- **Test**: This mode enables security checks and validations to ensure the code is robust and secure.
- **Release**: This mode applies the highest level of optimization for maximum performance and disables checks to improve runtime efficiency.

## On Mac

The library depends on OpenSSL. Therefore, the first step is to build the proper version of OpenSSL. The write permission to the `/usr/local/opt` may be required

```bash
scripts/openssl/build-static-openssl-macos.sh
or
scripts/openssl/build-static-openssl-macos-m1.sh
```

## On Linux

```bash
./scripts/openssl/build-static-openssl-linux.sh
```

Build the library by running

`make build`

To test the library, run

`make test`

To run the demos and benchmarks, you first need to install the library:

`sudo make install`

This will copy the `.a` files and header files to `/usr/local/opt/cbmpc/lib`

To run the demos (both cpp and go), run

`make demos`

<details><summary>If encountered this issue while running <code>make demos</code> cmd</summary>
<p>

```bash
---
root@ubuntu:/home/ubuntu/cb-mpc# make demos
bash -c 'bash ./scripts/run-demos.sh --run-all'
-- The CXX compiler identification is GNU 11.4.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
======= Build system: Linux =======
IS_X86_64:                      true
IS_ARM64:                       
IS_LINUX:                       true
IS_APPLE:                       
IS_IOS:                         
IS_IOS_SIMULATOR:               
IS_ANDROID:                     
IS_MACOS:                       
IS_WASM:                        
IS_WASM_TYPES:                  
IS_CLANG:                       
CMAKE_OS:                       Linux
CMAKE_ARCH:                     
======= Flags =======
CMAKE_CXX_FLAGS:                 -std=c++17 -fPIC -fvisibility=hidden -fno-operator-names -Wno-attributes -Wno-null-dereference -Wno-parentheses -Wno-reorder -Wno-missing-braces -Wno-switch -Wno-switch-enum -Wno-sign-compare -Wno-strict-overflow -Wno-unused -Wno-parentheses -Werror -Wno-shorten-64-to-32 -DNO_DEPRECATED_OPENSSL -Wno-maybe-uninitialized -mpclmul -maes -msse4.1
CMAKE_SHARED_LINKER_FLAGS:       -Wl,--exclude-libs,ALL -Wl,-z,defs -z noexecstack -z nodelete
CMAKE_EXE_LINKER_FLAGS:          -Wl,--exclude-libs,ALL -Wl,-z,defs -z noexecstack -z nodelete
-- Configuring done
-- Generating done
-- Build files have been written to: /home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build
gmake[1]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
gmake[2]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
gmake[3]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
gmake[3]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
gmake[3]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
[ 50%] Building CXX object CMakeFiles/mpc-demo-basic_primitive.dir/main.cpp.o
[100%] Linking CXX executable mpc-demo-basic_primitive
gmake[3]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
[100%] Built target mpc-demo-basic_primitive
gmake[2]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
gmake[1]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/basic_primitive/build'
-- The CXX compiler identification is GNU 11.4.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
======= Build system: Linux =======
IS_X86_64:                      true
IS_ARM64:                       
IS_LINUX:                       true
IS_APPLE:                       
IS_IOS:                         
IS_IOS_SIMULATOR:               
IS_ANDROID:                     
IS_MACOS:                       
IS_WASM:                        
IS_WASM_TYPES:                  
IS_CLANG:                       
CMAKE_OS:                       Linux
CMAKE_ARCH:                     
======= Flags =======
CMAKE_CXX_FLAGS:                 -std=c++17 -fPIC -fvisibility=hidden -fno-operator-names -Wno-attributes -Wno-null-dereference -Wno-parentheses -Wno-reorder -Wno-missing-braces -Wno-switch -Wno-switch-enum -Wno-sign-compare -Wno-strict-overflow -Wno-unused -Wno-parentheses -Werror -Wno-shorten-64-to-32 -DNO_DEPRECATED_OPENSSL -Wno-maybe-uninitialized -mpclmul -maes -msse4.1
CMAKE_SHARED_LINKER_FLAGS:       -Wl,--exclude-libs,ALL -Wl,-z,defs -z noexecstack -z nodelete
CMAKE_EXE_LINKER_FLAGS:          -Wl,--exclude-libs,ALL -Wl,-z,defs -z noexecstack -z nodelete
-- Configuring done
-- Generating done
-- Build files have been written to: /home/ubuntu/cb-mpc/demos/demos-cpp/zk/build
gmake[1]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
gmake[2]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
gmake[3]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
gmake[3]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
gmake[3]: Entering directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
[ 50%] Building CXX object CMakeFiles/mpc-demo-zk.dir/main.cpp.o
[100%] Linking CXX executable mpc-demo-zk
gmake[3]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
[100%] Built target mpc-demo-zk
gmake[2]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
gmake[1]: Leaving directory '/home/ubuntu/cb-mpc/demos/demos-cpp/zk/build'
================ hash ===============
hash_string() = !p�������9I�4
hash_number() = 14028708065946319012623502598080414398684851644016047064283527369179693789236
hash_curve() = 39474432851047904829495546702228241449012346763173886845934003543097368676385
=============== commitment ===========
commitment: 48881987957672782885934201568492752963652452262648903067789954614024271377435
0
================ ZK Demo ===============
---------------- ZK_UC_DL-P256 ----------------

***** Setup *****
Prover's private input w, a random number from Z_q: 11511080152431076193144488104214359588183067121356919082201458831196599729934
Common input: Q = w * G: 
  Q.x = 113912529447054980704135968079842487770678715246767961430873242716252990630805
  Q.y = 103682399928530129222932410747859350548918995160179583880355472605216791134188
Prover proves that he knows w such that Q = w * G.

***** Prove *****
Prover calls zk.prove(Q, w, sid, aux) to generate a proof.
Prover's proof contains : A[16], e[16], z[16], where 16 is the Fischlin parameters we use.
  A[0].x = 75247185740195680795672259801526681232292324238351534387601943673076978651278
  A[0].y = 100002056572075990734120350496720740669216573959293418916545725536595300218255
  e[0] = 13
  z[0] = 111997346623749763064273552204768403319460481154701572791472939880224573717326
  ...
The proof size is 2315 bytes.

***** Verify *****
Verifier calls zk.verify(Q, sid, aux) to verify the proof.
The proof is valid.
# command-line-arguments
/usr/local/go/pkg/tool/linux_amd64/link: running g++ failed: exit status 1
/usr/bin/g++ -m64 -s -Wl,--build-id=0xcc28e3104875f3e0403493f0fb68e9d8611a494d -o $WORK/b001/exe/main -Wl,--export-dynamic-symbol=_cgo_panic -Wl,--export-dynamic-symbol=_cgo_topofstack -Wl,--export-dynamic-symbol=callback_receive -Wl,--export-dynamic-symbol=callback_receive_all -Wl,--export-dynamic-symbol=callback_send -Wl,--export-dynamic-symbol=crosscall2 -Wl,--compress-debug-sections=zlib /tmp/go-link-2646965676/go.o /tmp/go-link-2646965676/000000.o /tmp/go-link-2646965676/000001.o /tmp/go-link-2646965676/000002.o /tmp/go-link-2646965676/000003.o /tmp/go-link-2646965676/000004.o /tmp/go-link-2646965676/000005.o /tmp/go-link-2646965676/000006.o /tmp/go-link-2646965676/000007.o /tmp/go-link-2646965676/000008.o /tmp/go-link-2646965676/000009.o /tmp/go-link-2646965676/000010.o /tmp/go-link-2646965676/000011.o /tmp/go-link-2646965676/000012.o /tmp/go-link-2646965676/000013.o /tmp/go-link-2646965676/000014.o /tmp/go-link-2646965676/000015.o /tmp/go-link-2646965676/000016.o -O2 -g -ldl /usr/local/lib64/libcrypto.a -L/usr/local/opt/cbmpc/lib -lcbmpc /usr/local/lib64/libcrypto.a -O2 -g -lpthread -no-pie
/usr/bin/ld: cannot find /usr/local/lib64/libcrypto.a: No such file or directory
/usr/bin/ld: cannot find /usr/local/lib64/libcrypto.a: No such file or directory
collect2: error: ld returned 1 exit status

make: *** [Makefile:121: demos] Error 1
root@ubuntu:/home/ubuntu/cb-mpc#
```

</p>
</details>

How to resolve above issue:

```bash
## Check where OpenSSL installed libcrypto.a
find /usr/lib /usr/local/lib -name "libcrypto.a"
# /usr/lib/x86_64-linux-gnu/libcrypto.a

## If libcrypto.a exists in a different location, create a symbolic link
sudo ln -s /usr/lib/x86_64-linux-gnu/libcrypto.a /usr/local/lib64/libcrypto.a
```

To run the benchmarks, run

`make bench`

Our benchmark results can be found at <https://coinbase.github.io/cb-mpc>

Finally, to clean up, run

```bash
make clean
make clean-demos
```

To use `clang-format` to lint, we use the clang-format version 14.
Install it with

```
brew install llvm@14
brew link --force --overwrite llvm@14
```

then `make lint` will format all `.cpp` and `.h` files in `src` and `tests`

## In Docker

We have a Dockerfile that already contains steps for building the proper OpenSSL files. Therefore, the first step is to create the image

`make image`

You can run the rest of the `make` commands by invoking them inside docker.
For example, for a one-off testing, you can run

`docker run -it --rm -v $(pwd):/code -t cb-mpc bash -c 'make test'`


## Supported Protocols

Please note that all cryptographic code has a specification (except for code like wrappers around OpenSSL and the like), but there are some protocol specifications that are not implemented but still appear in the specifications since they may be useful for some application developers.

<table>
  <tr>
    <td><b> Name </b></td>
    <td><b> Spec </b></td>
    <td><b> Theory </b></td>
    <td><b> Code </b></td>
  </tr>
    <tr>
    <td>Basic Primitives</td>
    <td><a href="/docs/spec/basic-primitives-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/basic-primitives-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/crypto/">code folder</a></td>
  </tr>
    <tr>
    <td>Zero-Knowledge Proofs</td>
    <td><a href="/docs/spec/zk-proofs-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/zk-proofs-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/zk/">code folder</a></td>
  </tr>
  <tr>
    <td>EC-DKG</td>
    <td><a href="/docs/spec/ec-dkg-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/ec-dkg-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/ec_dkg.h">coinbase::mpc::eckey</a></td>
  </tr>
  <tr>
    <td>ECDSA-2PC</td>
    <td><a href="/docs/spec/ecdsa-2pc-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/ecdsa-2pc-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/ecdsa_2p.h">coinbase::mpc::ecdsa2pc</a></td>
  </tr>
    <td>ECDSA-MPC</td>
    <td><a href="/docs/spec/ecdsa-mpc-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/ecdsa-mpc-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/ecdsa_mp.h">coinbase::mpc::ecdsampc</a></td>
  </tr>
  <tr>
    <td>MPC Friendly Derivation</td>
    <td><a href="/docs/spec/mpc-friendly-derivation-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/mpc-friendly-derivation-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/hd_keyset_ecdsa_2p.h">key_share_ecdsa_hdmpc_2p_t</a></td>
  </tr>
  <tr>
    <td>Oblivious Transfer (OT) and OT Extension</td>
    <td><a href="/docs/spec/oblivious-transfer-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/oblivious-transfer-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/ot.h">ot</a></td>
  </tr>
  <tr>
    <td>Publicly Verifiable Encryption (PVE)</td>
    <td><a href="/docs/spec/publicly-verifiable-encryption-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/publicly-verifiable-encryption-as-ZK-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/pve.h">pve</a></td>
  </tr>
  <tr>
    <td>Schnorr</td>
    <td><a href="/docs/spec/schnorr-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/schnorr-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/protocol/schnorr_2p.h">coinbase::mpc::schnorr2p</a> and <a href="/src/cbmpc/protocol/schnorr_mp.h">coinbase::mpc::schnorrmp</a></td>
  </tr>
  <tr>
    <td>Threshold Encryption (TDH2)</td>
    <td><a href="/docs/spec/tdh2-spec.pdf">spec</a></td>
    <td><a href="/docs/theory/tdh2-theory.pdf">theory</a></td>
    <td><a href="/src/cbmpc/crypto/tdh2.h">coinbase::crypto::tdh2</a></td>
  </tr>
  <tr>
  </tr>
</table>


# Design Principles and Secure Usage

We have outlined our cryptographic design principles and some conventions regarding our documentation in our [design principles document](/docs/design-principles.pdf). Furthermore, our [secure usage document](/docs/secure-usage.pdf) describes important security guidelines that should be followed when using the library. Finally, we have strived to create a library that is constant-time to prevent side-channel attacks. This effort is highly dependent on the architecture of the CPU and the compiler used to build the library and therefore is not guaranteed on all platforms. We have outlined our efforts in the [constant-time document](/docs/constant-time.pdf).

# External Dependencies

## OpenSSL
### Internal Header Files

We have included copies of certain OpenSSL internal header files that are not exposed through OpenSSL's public API but are necessary for our implementation. These files can be found in our codebase and are used to access specific OpenSSL functionality that we require. This approach ensures we can maintain compatibility while accessing needed internal features.

### RSA OAEP Padding Modification

Our implementation modifies OpenSSL's OAEP padding algorithm to support deterministic padding when provided with a seed. The key changes are in the `ossl_rsa_padding_add_PKCS1_OAEP_mgf1_ex` function, specifically in steps 3e-3h of the PKCS#1 v2.0 (RFC 2437) OAEP encoding process:

- Instead of generating a random seed internally using `RAND_bytes_ex()`, our implementation accepts an external seed parameter
- We use a simplified MGF1 implementation that directly XORs the mask with the data in a single pass, rather than using separate buffer allocations
- This allows for deterministic padding when the same seed is provided, which is useful for testing and certain cryptographic protocols that require reproducible results

The security properties of OAEP remain intact as long as the provided seed maintains appropriate randomness and uniqueness requirements. For standard encryption operations, we recommend using the non-deterministic version that generates random seeds internally.

## Bitcoin Secp256k1 Curve implementation

We used a modified version of the secp256k1 curve implementation from [coinbase/secp256k1](https://github.com/coinbase/secp256k1) which is forked from [bitcoin-core/secp256k1](https://github.com/bitcoin-core/secp256k1). The change made is to allow calling the curve operations from within our C++ codebase.

Note that as indicated in their repository, the curve addition operations of `secp256k1` are not constant time. To work around this, we have devised a custom point addition operation that is constant time. Please refer to our [documentation](/docs/constant-time.pdf) for more details.
