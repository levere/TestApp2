montageDefine("6a22cd0","ui/flow.reel/flow.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=flow.css>\n    <script type=text/montage-serialization>{"repetition":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"montage-flow-repetition"},"contentController":{"@":"frustumController"}},"bindings":{"isSelectionEnabled":{"<-":"@owner.isSelectionEnabled"}}},"frustumController":{"prototype":"core/range-controller","bindings":{"content":{"<-":"@owner.contentController.organizedContent ?? @owner.content"},"selection.0":{"<->":"@owner.contentController.selection.0"},"visibleIndexes":{"<-":"@owner._visibleIndexes"}}},"flowTranslateComposer":{"prototype":"ui/flow.reel/flow-translate-composer","properties":{"flow":{"@":"owner"},"invertAxis":true,"allowFloats":true,"minScroll":0},"bindings":{"maxScroll":{"<-":"@owner.length"},"_momentumDuration":{"<-":"@owner.momentumDuration"},"translateStride":{"<-":"@owner.stride"},"scrollingMode":{"<-":"@owner.scrollingMode"},"linearScrollingVector":{"<-":"@owner.linearScrollingVector"},"isLimitedToSingleStride":{"<-":"@owner.isLimitedToSingleStride"},"delegate":{"<-":"@owner"}}},"slot":{"prototype":"ui/slot.reel","properties":{"element":{"#":"montage-flow-slot"}},"bindings":{"content":{"<->":"@owner.slotContent"}}},"owner":{"properties":{"element":{"#":"montage-flow"},"_repetition":{"@":"repetition"},"_flowTranslateComposer":{"@":"flowTranslateComposer"},"_cameraElement":{"#":"montage-flow-camera"},"_frustumController":{"@":"frustumController"}},"bindings":{"scroll":{"<->":"@flowTranslateComposer.scroll"},"selection":{"<->":"@frustumController.selection"},"selectedIndexes":{"<-":"@repetition.selectedIndexes"},"activeIndexes":{"<-":"@repetition.activeIndexes"},"draggedSlideIndex":{"<-":"@flowTranslateComposer._closerIndex"}}},":iteration":{"alias":"@repetition:iteration"}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-flow class=montage-Flow>\n        <div data-montage-id=montage-flow-camera class=montage-Flow-camera>\n            <div data-montage-id=montage-flow-repetition class=montage-Flow-Repetition>\n                <div data-montage-id=wrapper>\n                    <div data-param=*></div>\n                </div>\n            </div>\n            <div data-montage-id=montage-flow-slot class=montage-Flow-Slot></div>\n        </div>\n    </div>\n\n\n</body></html>'});