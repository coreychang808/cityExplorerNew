IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
      highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
      pipes: null,
        pipesCount: 0,
          flowing: null,
            ended: false,
              endEmitted: false,
                reading: false,
                  sync: true,
                    needReadable: false,
                      emittedReadable: false,
                        readableListening: false,
                          resumeScheduled: false,
                            paused: true,
                              emitClose: true,
                                autoDestroy: false,
                                  destroyed: false,
                                    defaultEncoding: 'utf8',
                                      awaitDrain: 0,
                                        readingMore: true,
                                          decoder: null,
                                            encoding: null
  },
  readable: true,
    _events: [Object: null prototype] {
    end: [Function: resetHeadersTimeoutOnReqEnd]
  },
  _eventsCount: 1,
    _maxListeners: undefined,
      socket: Socket {
    connecting: false,
      _hadError: false,
        _parent: null,
          _host: null,
            _readableState: ReadableState {
      objectMode: false,
        highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
        pipes: null,
          pipesCount: 0,
            flowing: true,
              ended: false,
                endEmitted: false,
                  reading: true,
                    sync: false,
                      needReadable: true,
                        emittedReadable: false,
                          readableListening: false,
                            resumeScheduled: false,
                              paused: false,
                                emitClose: false,
                                  autoDestroy: false,
                                    destroyed: false,
                                      defaultEncoding: 'utf8',
                                        awaitDrain: 0,
                                          readingMore: false,
                                            decoder: null,
                                              encoding: null
    },
    readable: true,
      _events: [Object: null prototype] {
      end: [Array],
        drain: [Array],
          timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
              error: [Function: socketOnError],
                close: [Array],
                  resume: [Function: onSocketResume],
                    pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
      _maxListeners: undefined,
        _writableState: WritableState {
      objectMode: false,
        highWaterMark: 16384,
          finalCalled: false,
            needDrain: false,
              ending: false,
                ended: false,
                  finished: false,
                    destroyed: false,
                      decodeStrings: false,
                        defaultEncoding: 'utf8',
                          length: 0,
                            writing: false,
                              corked: 0,
                                sync: false,
                                  bufferProcessing: false,
                                    onwrite: [Function: bound onwrite],
                                      writecb: null,
                                        writelen: 0,
                                          bufferedRequest: null,
                                            lastBufferedRequest: null,
                                              pendingcb: 0,
                                                prefinished: false,
                                                  errorEmitted: false,
                                                    emitClose: false,
                                                      autoDestroy: false,
                                                        bufferedRequestCount: 0,
                                                          corkedRequestsFree: [Object]
    },
    writable: true,
      allowHalfOpen: true,
        _sockname: null,
          _pendingData: null,
            _pendingEncoding: '',
              server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    _server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    timeout: 120000,
      parser: HTTPParser {
      '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
              '4': [Function: bound onParserExecute],
                _headers: [],
                  _url: '',
                    socket: [Circular],
                      incoming: [Circular],
                        outgoing: null,
                          maxHeaderPairs: 2000,
                            _consumed: true,
                              onIncoming: [Function: bound parserOnIncoming],
                                parsingHeadersStart: 0
    },
    on: [Function: socketOnWrap],
      addListener: [Function: socketOnWrap],
        _paused: false,
          _httpMessage: ServerResponse {
      _events: [Object: null prototype],
        _eventsCount: 1,
          _maxListeners: undefined,
            outputData: [],
              outputSize: 0,
                writable: true,
                  _last: false,
                    chunkedEncoding: false,
                      shouldKeepAlive: true,
                        useChunkedEncodingByDefault: true,
                          sendDate: true,
                            _removedConnection: false,
                              _removedContLen: false,
                                _removedTE: false,
                                  _contentLength: null,
                                    _hasBody: true,
                                      _trailer: '',
                                        finished: false,
                                          _headerSent: false,
                                            socket: [Circular],
                                              connection: [Circular],
                                                _header: null,
                                                  _onPendingData: [Function: bound updateOutgoingData],
                                                    _sent100: false,
                                                      _expect_continue: false,
                                                        req: [Circular],
                                                          locals: [Object: null prototype] { },
      [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]: [Object: null prototype]
    },
    [Symbol(asyncId)]: 16,
      [Symbol(kHandle)]: TCP {
      reading: true,
        onconnection: null,
          _consumed: true,
            [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
        _idlePrev: [TimersList],
          _idleNext: [TimersList],
            _idleStart: 11277,
              _onTimeout: [Function: bound],
                _timerArgs: undefined,
                  _repeat: null,
                    _destroyed: false,
                      [Symbol(refed)]: false,
                        [Symbol(asyncId)]: 34,
                          [Symbol(triggerId)]: 18
    },
    [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
  },
  connection: Socket {
    connecting: false,
      _hadError: false,
        _parent: null,
          _host: null,
            _readableState: ReadableState {
      objectMode: false,
        highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
        pipes: null,
          pipesCount: 0,
            flowing: true,
              ended: false,
                endEmitted: false,
                  reading: true,
                    sync: false,
                      needReadable: true,
                        emittedReadable: false,
                          readableListening: false,
                            resumeScheduled: false,
                              paused: false,
                                emitClose: false,
                                  autoDestroy: false,
                                    destroyed: false,
                                      defaultEncoding: 'utf8',
                                        awaitDrain: 0,
                                          readingMore: false,
                                            decoder: null,
                                              encoding: null
    },
    readable: true,
      _events: [Object: null prototype] {
      end: [Array],
        drain: [Array],
          timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
              error: [Function: socketOnError],
                close: [Array],
                  resume: [Function: onSocketResume],
                    pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
      _maxListeners: undefined,
        _writableState: WritableState {
      objectMode: false,
        highWaterMark: 16384,
          finalCalled: false,
            needDrain: false,
              ending: false,
                ended: false,
                  finished: false,
                    destroyed: false,
                      decodeStrings: false,
                        defaultEncoding: 'utf8',
                          length: 0,
                            writing: false,
                              corked: 0,
                                sync: false,
                                  bufferProcessing: false,
                                    onwrite: [Function: bound onwrite],
                                      writecb: null,
                                        writelen: 0,
                                          bufferedRequest: null,
                                            lastBufferedRequest: null,
                                              pendingcb: 0,
                                                prefinished: false,
                                                  errorEmitted: false,
                                                    emitClose: false,
                                                      autoDestroy: false,
                                                        bufferedRequestCount: 0,
                                                          corkedRequestsFree: [Object]
    },
    writable: true,
      allowHalfOpen: true,
        _sockname: null,
          _pendingData: null,
            _pendingEncoding: '',
              server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    _server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    timeout: 120000,
      parser: HTTPParser {
      '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
              '4': [Function: bound onParserExecute],
                _headers: [],
                  _url: '',
                    socket: [Circular],
                      incoming: [Circular],
                        outgoing: null,
                          maxHeaderPairs: 2000,
                            _consumed: true,
                              onIncoming: [Function: bound parserOnIncoming],
                                parsingHeadersStart: 0
    },
    on: [Function: socketOnWrap],
      addListener: [Function: socketOnWrap],
        _paused: false,
          _httpMessage: ServerResponse {
      _events: [Object: null prototype],
        _eventsCount: 1,
          _maxListeners: undefined,
            outputData: [],
              outputSize: 0,
                writable: true,
                  _last: false,
                    chunkedEncoding: false,
                      shouldKeepAlive: true,
                        useChunkedEncodingByDefault: true,
                          sendDate: true,
                            _removedConnection: false,
                              _removedContLen: false,
                                _removedTE: false,
                                  _contentLength: null,
                                    _hasBody: true,
                                      _trailer: '',
                                        finished: false,
                                          _headerSent: false,
                                            socket: [Circular],
                                              connection: [Circular],
                                                _header: null,
                                                  _onPendingData: [Function: bound updateOutgoingData],
                                                    _sent100: false,
                                                      _expect_continue: false,
                                                        req: [Circular],
                                                          locals: [Object: null prototype] { },
      [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]: [Object: null prototype]
    },
    [Symbol(asyncId)]: 16,
      [Symbol(kHandle)]: TCP {
      reading: true,
        onconnection: null,
          _consumed: true,
            [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
        _idlePrev: [TimersList],
          _idleNext: [TimersList],
            _idleStart: 11277,
              _onTimeout: [Function: bound],
                _timerArgs: undefined,
                  _repeat: null,
                    _destroyed: false,
                      [Symbol(refed)]: false,
                        [Symbol(asyncId)]: 34,
                          [Symbol(triggerId)]: 18
    },
    [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
  },
  httpVersionMajor: 1,
    httpVersionMinor: 1,
      httpVersion: '1.1',
        complete: false,
          headers: {
    host: 'localhost:3000',
      connection: 'keep-alive',
        accept: '*/*',
          origin: 'https://codefellows.github.io',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) ' +
              'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 ' +
              'Safari/537.36',
              'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                  'if-none-match': 'W/"f1b-cKRsuPXt1q9CypOkavokYq1zxV4"'
  },
  rawHeaders: [
    'Host',
    'localhost:3000',
    'Connection',
    'keep-alive',
    'Accept',
    '*/*',
    'Origin',
    'https://codefellows.github.io',
    'User-Agent',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) ' +
    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 ' +
    'Safari/537.36',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'en-US,en;q=0.9',
    'If-None-Match',
    'W/"f1b-cKRsuPXt1q9CypOkavokYq1zxV4"'
  ],
    trailers: { },
  rawTrailers: [],
    aborted: false,
      upgrade: false,
        url: '/weather?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
          method: 'GET',
            statusCode: null,
              statusMessage: null,
                client: Socket {
    connecting: false,
      _hadError: false,
        _parent: null,
          _host: null,
            _readableState: ReadableState {
      objectMode: false,
        highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
        pipes: null,
          pipesCount: 0,
            flowing: true,
              ended: false,
                endEmitted: false,
                  reading: true,
                    sync: false,
                      needReadable: true,
                        emittedReadable: false,
                          readableListening: false,
                            resumeScheduled: false,
                              paused: false,
                                emitClose: false,
                                  autoDestroy: false,
                                    destroyed: false,
                                      defaultEncoding: 'utf8',
                                        awaitDrain: 0,
                                          readingMore: false,
                                            decoder: null,
                                              encoding: null
    },
    readable: true,
      _events: [Object: null prototype] {
      end: [Array],
        drain: [Array],
          timeout: [Function: socketOnTimeout],
            data: [Function: bound socketOnData],
              error: [Function: socketOnError],
                close: [Array],
                  resume: [Function: onSocketResume],
                    pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
      _maxListeners: undefined,
        _writableState: WritableState {
      objectMode: false,
        highWaterMark: 16384,
          finalCalled: false,
            needDrain: false,
              ending: false,
                ended: false,
                  finished: false,
                    destroyed: false,
                      decodeStrings: false,
                        defaultEncoding: 'utf8',
                          length: 0,
                            writing: false,
                              corked: 0,
                                sync: false,
                                  bufferProcessing: false,
                                    onwrite: [Function: bound onwrite],
                                      writecb: null,
                                        writelen: 0,
                                          bufferedRequest: null,
                                            lastBufferedRequest: null,
                                              pendingcb: 0,
                                                prefinished: false,
                                                  errorEmitted: false,
                                                    emitClose: false,
                                                      autoDestroy: false,
                                                        bufferedRequestCount: 0,
                                                          corkedRequestsFree: [Object]
    },
    writable: true,
      allowHalfOpen: true,
        _sockname: null,
          _pendingData: null,
            _pendingEncoding: '',
              server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    _server: Server {
      _events: [Object: null prototype],
        _eventsCount: 2,
          _maxListeners: undefined,
            _connections: 1,
              _handle: [TCP],
                _usingWorkers: false,
                  _workers: [],
                    _unref: false,
                      allowHalfOpen: true,
                        pauseOnConnect: false,
                          httpAllowHalfOpen: false,
                            timeout: 120000,
                              keepAliveTimeout: 5000,
                                maxHeadersCount: null,
                                  headersTimeout: 40000,
                                    _connectionKey: '6::::3000',
                                      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                        [Symbol(ServerResponse)]: [Function: ServerResponse],
                                          [Symbol(asyncId)]: 9
    },
    timeout: 120000,
      parser: HTTPParser {
      '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
          '2': [Function: parserOnBody],
            '3': [Function: parserOnMessageComplete],
              '4': [Function: bound onParserExecute],
                _headers: [],
                  _url: '',
                    socket: [Circular],
                      incoming: [Circular],
                        outgoing: null,
                          maxHeaderPairs: 2000,
                            _consumed: true,
                              onIncoming: [Function: bound parserOnIncoming],
                                parsingHeadersStart: 0
    },
    on: [Function: socketOnWrap],
      addListener: [Function: socketOnWrap],
        _paused: false,
          _httpMessage: ServerResponse {
      _events: [Object: null prototype],
        _eventsCount: 1,
          _maxListeners: undefined,
            outputData: [],
              outputSize: 0,
                writable: true,
                  _last: false,
                    chunkedEncoding: false,
                      shouldKeepAlive: true,
                        useChunkedEncodingByDefault: true,
                          sendDate: true,
                            _removedConnection: false,
                              _removedContLen: false,
                                _removedTE: false,
                                  _contentLength: null,
                                    _hasBody: true,
                                      _trailer: '',
                                        finished: false,
                                          _headerSent: false,
                                            socket: [Circular],
                                              connection: [Circular],
                                                _header: null,
                                                  _onPendingData: [Function: bound updateOutgoingData],
                                                    _sent100: false,
                                                      _expect_continue: false,
                                                        req: [Circular],
                                                          locals: [Object: null prototype] { },
      [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]: [Object: null prototype]
    },
    [Symbol(asyncId)]: 16,
      [Symbol(kHandle)]: TCP {
      reading: true,
        onconnection: null,
          _consumed: true,
            [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
        _idlePrev: [TimersList],
          _idleNext: [TimersList],
            _idleStart: 11277,
              _onTimeout: [Function: bound],
                _timerArgs: undefined,
                  _repeat: null,
                    _destroyed: false,
                      [Symbol(refed)]: false,
                        [Symbol(asyncId)]: 34,
                          [Symbol(triggerId)]: 18
    },
    [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
  },
  _consuming: false,
    _dumped: false,
      next: [Function: next],
        baseUrl: '',
          originalUrl: '/weather?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
            _parsedUrl: Url {
    protocol: null,
      slashes: null,
        auth: null,
          host: null,
            port: null,
              hostname: null,
                hash: null,
                  search: '?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
                    query: 'data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
                      pathname: '/weather',
                        path: '/weather?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
                          href: '/weather?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708',
                            _raw: '/weather?data%5Bid%5D=1&data%5Bsearch_query%5D=seattle&data%5Bformatted_query%5D=Seattle%2C%20WA%2C%20USA&data%5Blatitude%5D=47.6062095&data%5Blongitude%5D=-122.3320708'
  },
  params: { },
  query: {
    data: {
      id: '1',
        search_query: 'seattle',
          formatted_query: 'Seattle, WA, USA',
            latitude: '47.6062095',
              longitude: '-122.3320708'
    }
  },
  res: ServerResponse {
    _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
    _eventsCount: 1,
      _maxListeners: undefined,
        outputData: [],
          outputSize: 0,
            writable: true,
              _last: false,
                chunkedEncoding: false,
                  shouldKeepAlive: true,
                    useChunkedEncodingByDefault: true,
                      sendDate: true,
                        _removedConnection: false,
                          _removedContLen: false,
                            _removedTE: false,
                              _contentLength: null,
                                _hasBody: true,
                                  _trailer: '',
                                    finished: false,
                                      _headerSent: false,
                                        socket: Socket {
      connecting: false,
        _hadError: false,
          _parent: null,
            _host: null,
              _readableState: [ReadableState],
                readable: true,
                  _events: [Object: null prototype],
                    _eventsCount: 8,
                      _maxListeners: undefined,
                        _writableState: [WritableState],
                          writable: true,
                            allowHalfOpen: true,
                              _sockname: null,
                                _pendingData: null,
                                  _pendingEncoding: '',
                                    server: [Server],
                                      _server: [Server],
                                        timeout: 120000,
                                          parser: [HTTPParser],
                                            on: [Function: socketOnWrap],
                                              addListener: [Function: socketOnWrap],
                                                _paused: false,
                                                  _httpMessage: [Circular],
                                                    [Symbol(asyncId)]: 16,
                                                      [Symbol(kHandle)]: [TCP],
                                                        [Symbol(lastWriteQueueSize)]: 0,
                                                          [Symbol(timeout)]: Timeout {
        _idleTimeout: 120000,
          _idlePrev: [TimersList],
            _idleNext: [TimersList],
              _idleStart: 11277,
                _onTimeout: [Function: bound],
                  _timerArgs: undefined,
                    _repeat: null,
                      _destroyed: false,
                        [Symbol(refed)]: false,
                          [Symbol(asyncId)]: 34,
                            [Symbol(triggerId)]: 18
      },
      [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
    },
    connection: Socket {
      connecting: false,
        _hadError: false,
          _parent: null,
            _host: null,
              _readableState: [ReadableState],
                readable: true,
                  _events: [Object: null prototype],
                    _eventsCount: 8,
                      _maxListeners: undefined,
                        _writableState: [WritableState],
                          writable: true,
                            allowHalfOpen: true,
                              _sockname: null,
                                _pendingData: null,
                                  _pendingEncoding: '',
                                    server: [Server],
                                      _server: [Server],
                                        timeout: 120000,
                                          parser: [HTTPParser],
                                            on: [Function: socketOnWrap],
                                              addListener: [Function: socketOnWrap],
                                                _paused: false,
                                                  _httpMessage: [Circular],
                                                    [Symbol(asyncId)]: 16,
                                                      [Symbol(kHandle)]: [TCP],
                                                        [Symbol(lastWriteQueueSize)]: 0,
                                                          [Symbol(timeout)]: Timeout {
        _idleTimeout: 120000,
          _idlePrev: [TimersList],
            _idleNext: [TimersList],
              _idleStart: 11277,
                _onTimeout: [Function: bound],
                  _timerArgs: undefined,
                    _repeat: null,
                      _destroyed: false,
                        [Symbol(refed)]: false,
                          [Symbol(asyncId)]: 34,
                            [Symbol(triggerId)]: 18
      },
      [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
    },
    _header: null,
      _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
          _expect_continue: false,
            req: [Circular],
              locals: [Object: null prototype] { },
    [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: [Object: null prototype] {
      'x-powered-by': [Array],
        'access-control-allow-origin': [Array]
    }
  },
  route: Route {
    path: '/weather',
      stack: [[Layer]],
        methods: { get: true }
  }
}