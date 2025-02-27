"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[102],{2232:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(4848),t=n(8453);const a={},l="Display Overview",o={id:"Raphaview/Tutorials/Overall GUI",title:"Display Overview",description:"I-Rapha View\u2122 displays DICOM images and provides various image manipulation features necessary for medical diagnosis and interpretation. The I-Rapha View\u2122 interface consists of a menu bar, toggle buttons, series thumbnail window, and image display window.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/1_Raphaview/5_Tutorials/1_Overall GUI.md",sourceDirName:"1_Raphaview/5_Tutorials",slug:"/Raphaview/Tutorials/Overall GUI",permalink:"/ionedocs-site/docs/Raphaview/Tutorials/Overall GUI",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1_Raphaview/5_Tutorials/1_Overall GUI.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/ionedocs-site/docs/Raphaview/Tutorials/"},next:{title:"DICOM Export",permalink:"/ionedocs-site/docs/Raphaview/Tutorials/DICOMExport"}},r={},d=[{value:"Menu",id:"menu",level:2},{value:"Sub Menus",id:"sub-menus",level:2},{value:"Layout",id:"layout",level:2},{value:"Combine(Series Merge)",id:"combineseries-merge",level:2},{value:"Apply All (Apply to All Images in Series)",id:"apply-all-apply-to-all-images-in-series",level:2},{value:"Navi(Navigation)",id:"navinavigation",level:2},{value:"Scout Line",id:"scout-line",level:3},{value:"Cross Link",id:"cross-link",level:3},{value:"Cine(Video)",id:"cinevideo",level:2},{value:"Select",id:"select",level:2},{value:"W/L(Brightness/Contrast Adjustment)",id:"wlbrightnesscontrast-adjustment",level:2},{value:"Zoom (in/out)",id:"zoom-inout",level:2},{value:"Pan(Image Position Adjustment)",id:"panimage-position-adjustment",level:2},{value:"Fit (Adjust Image Size and Position)",id:"fit-adjust-image-size-and-position",level:2},{value:"Left / Right (Image Rotation)",id:"left--right-image-rotation",level:2},{value:"Length(Measure Length)",id:"lengthmeasure-length",level:2},{value:"Angle(Measure Angle)",id:"anglemeasure-angle",level:2},{value:"Transformations(Image Transformation Tools)",id:"transformationsimage-transformation-tools",level:2},{value:"Measurements",id:"measurements",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Capture",id:"capture",level:2},{value:"Revise",id:"revise",level:2},{value:"Utility(\uc720\ud2f8\ub9ac\ud2f0)",id:"utility\uc720\ud2f8\ub9ac\ud2f0",level:2},{value:"Unfold Multiframe",id:"unfold-multiframe",level:2},{value:"Popup Menu",id:"popup-menu",level:2},{value:"Worklist",id:"worklist",level:2},{value:"Report",id:"report",level:2},{value:"VL(Virtual Layout)",id:"vlvirtual-layout",level:2},{value:"Presentation State",id:"presentation-state",level:2}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"display-overview",children:"Display Overview"})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"I-Rapha View\u2122 displays DICOM images and provides various image manipulation features necessary for medical diagnosis and interpretation. The I-Rapha View\u2122 interface consists of a menu bar, toggle buttons, series thumbnail window, and image display window."})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(7477).A+"",width:"1410",height:"737"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u24f5 Menu Bar: Lists functions needed to view and interpret medical images."}),"\n",(0,s.jsx)(i.li,{children:"\u24f6 Series Thumbnails: Displays series from the current study as thumbnails."}),"\n",(0,s.jsx)(i.li,{children:"\u24f7 Study Tab: Shows information for the studies opened in the viewer."}),"\n",(0,s.jsx)(i.li,{children:"\u24f8 Image Display Window: Displays the medical images."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The menu bar at the top of I-Rapha View\u2122 provides various functions (Overlay, Transformations, Filtering, etc.) for viewing and interpreting medical images, with icons and tooltips. The menu items shown vary depending on the viewer mode."}),"\n",(0,s.jsx)(i.h2,{id:"menu",children:"Menu"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(5067).A+"",width:"1527",height:"216"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Maximize: Maximizes I-Rapha View\u2122 to fit the screen."}),"\n",(0,s.jsx)(i.li,{children:"Viewer Info: Opens a pop-up with version and manufacturer contact details."}),"\n",(0,s.jsx)(i.li,{children:"Worklist: Opens the worklist."}),"\n",(0,s.jsx)(i.li,{children:"Report: Opens the report window."}),"\n",(0,s.jsx)(i.li,{children:"Prev Study Worklist: Opens the study before the current one in the worklist."}),"\n",(0,s.jsx)(i.li,{children:"Next Study Worklist: Opens the study after the current one in the worklist."}),"\n",(0,s.jsx)(i.li,{children:"Virtual Layout: Changes the virtual layout of the viewer."}),"\n",(0,s.jsx)(i.li,{children:"Mode: Changes the mode for displaying images."}),"\n",(0,s.jsx)(i.li,{children:"Layout: Sets the rows and columns for image arrangement."}),"\n",(0,s.jsx)(i.li,{children:"Single View: Displays only the currently selected image in fullscreen."}),"\n",(0,s.jsx)(i.li,{children:"Unfold: For multi-frame images, displays all frames."}),"\n",(0,s.jsx)(i.li,{children:"Combine Series: Merges all series into one (can also double-click on a series thumbnail)."}),"\n",(0,s.jsx)(i.li,{children:"Apply All: When on, applies image processing to all images in the series."}),"\n",(0,s.jsx)(i.li,{children:"Info: Chooses to display study, annotation, and measurement info on the image."}),"\n",(0,s.jsx)(i.li,{children:"Select: Changes mouse status to default selection."}),"\n",(0,s.jsx)(i.li,{children:"W/L: Changes the window level."}),"\n",(0,s.jsx)(i.li,{children:"Zoom: Zooms in/out on the image."}),"\n",(0,s.jsx)(i.li,{children:"Pan: Moves the image position."}),"\n",(0,s.jsx)(i.li,{children:"Fit: Resets the image to fit the display window."}),"\n",(0,s.jsx)(i.li,{children:"Left: Rotates the image 90 degrees left."}),"\n",(0,s.jsx)(i.li,{children:"Right: Rotates the image 90 degrees right."}),"\n",(0,s.jsx)(i.li,{children:"Length: Measures the length of a selected part."}),"\n",(0,s.jsx)(i.li,{children:"Angle: Measures the angle of a selected part."}),"\n",(0,s.jsx)(i.li,{children:"Transformations: Includes functions like Rotate, Flip, and Sharpen."}),"\n",(0,s.jsx)(i.li,{children:"Measurements: Includes Center Line, Pixel Value, etc., for image measurement."}),"\n",(0,s.jsx)(i.li,{children:"Annotations: Adds arrows, localization, text, and other annotations."}),"\n",(0,s.jsx)(i.li,{children:"Presentation State: Saves and re-applies annotation, measurement, and display state."}),"\n",(0,s.jsx)(i.li,{children:"Key Image Note: Starts key image selection mode; multiple selected images are saved as key images."}),"\n",(0,s.jsx)(i.li,{children:"Refresh: Reloads the loaded image."}),"\n",(0,s.jsx)(i.li,{children:"Undo: Cancels the most recent annotation or measurement."}),"\n",(0,s.jsx)(i.li,{children:"Capture: Creates a secondary capture image for each section."}),"\n",(0,s.jsx)(i.li,{children:"Revise: Edits or adds markings to an image and saves changes."}),"\n",(0,s.jsx)(i.li,{children:"Utility: Includes Reset, DICOM info, Copy, and Settings functions."}),"\n",(0,s.jsx)(i.li,{children:"Close: Closes the viewer window"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"sub-menus",children:"Sub Menus"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(9167).A+"",width:"1718",height:"660"})}),"\n",(0,s.jsx)(i.p,{children:"The menu bar in I-Rapha View\u2122 offers various features needed for viewing and manipulating images. The options in the menu bar change based on the [Display Window] mode. Menus with a downward triangle icon have submenus."}),"\n",(0,s.jsx)(i.h2,{id:"layout",children:"Layout"}),"\n",(0,s.jsx)(i.p,{children:"Selecting the [Layout] menu displays a submenu with the following options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"1:1 Mode: Sets the display window to 1 row \xd7 1 column."}),"\n",(0,s.jsx)(i.li,{children:"1:2 Mode: Sets the display window to 1 row \xd7 2 columns."}),"\n",(0,s.jsx)(i.li,{children:"2:1 Mode: Sets the display window to 2 rows \xd7 1 column."}),"\n",(0,s.jsx)(i.li,{children:"2:2 Mode: Sets the display window to 2 rows \xd7 2 columns."}),"\n",(0,s.jsx)(i.li,{children:"Config: Allows users to set the display window up to 5 rows \xd7 5 columns."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"combineseries-merge",children:"Combine(Series Merge)"}),"\n",(0,s.jsx)(i.p,{children:"This option is available only in Image Mode and merges multiple series within a study to display them as a single series in the display window. When selected, all images in the study are merged and shown as a single series."}),"\n",(0,s.jsx)(i.h2,{id:"apply-all-apply-to-all-images-in-series",children:"Apply All (Apply to All Images in Series)"}),"\n",(0,s.jsx)(i.p,{children:"Available only in Image Mode, this option applies the current operation to all images in the series. When selected, the changes are reflected across the entire series; if unselected, only the current image reflects the changes."}),"\n",(0,s.jsx)(i.h2,{id:"navinavigation",children:"Navi(Navigation)"}),"\n",(0,s.jsx)(i.p,{children:"This menu appears only in Stack Mode, providing location information for images. The submenu includes Scout Line, Cross Link, and Interstudy Cross Link options."}),"\n",(0,s.jsx)(i.p,{children:"Scout Line: Shows the location of selected series images on images with different angles within the series.\nCross Link: Allows users to mark a location in one series and locate the corresponding position in other series, displaying a coordinate line.\nInter Study: Executes the Cross Link function across different studies."}),"\n",(0,s.jsx)(i.h3,{id:"scout-line",children:"Scout Line"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Click or scroll on an image to set a reference image."}),"\n",(0,s.jsx)(i.li,{children:"Scout Lines show the corresponding location in other series images."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"cross-link",children:"Cross Link"}),"\n",(0,s.jsx)(i.p,{children:"Cross Link allows users to mark a location on a reference image by clicking or dragging, displaying the corresponding coordinates on other series images. It operates only in Stack Mode."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In Stack Mode, select the [Navi] menu."}),"\n",(0,s.jsx)(i.li,{children:"Activate Cross Link and click or drag to mark a location on one series, displaying coordinates on other series images."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"cinevideo",children:"Cine(Video)"}),"\n",(0,s.jsx)(i.p,{children:"This function displays images from multi-frame series like a video. If the selected series has multi-frames, Cine mode appears automatically and can be toggled on or off."}),"\n",(0,s.jsx)(i.h2,{id:"select",children:"Select"}),"\n",(0,s.jsx)(i.p,{children:"Used to select images in the [Display Window]. In Image Mode, hold down the Ctrl key (Command on MacOS) and click to select multiple images, or drag to select several images at once."}),"\n",(0,s.jsx)(i.h2,{id:"wlbrightnesscontrast-adjustment",children:"W/L(Brightness/Contrast Adjustment)"}),"\n",(0,s.jsx)(i.p,{children:"Adjusts the Window Width and Level values in the [Display Window]. When [W/L] is selected, drag the mouse vertically and horizontally to adjust. Window Width controls contrast, and Window Level controls brightness."}),"\n",(0,s.jsx)(i.h2,{id:"zoom-inout",children:"Zoom (in/out)"}),"\n",(0,s.jsx)(i.p,{children:"Zooms in or out on images in the [Display Window]. To zoom in, select Zoom and drag the mouse upward over the desired image."}),"\n",(0,s.jsx)(i.h2,{id:"panimage-position-adjustment",children:"Pan(Image Position Adjustment)"}),"\n",(0,s.jsx)(i.p,{children:"Moves the position of the image in the display window."}),"\n",(0,s.jsx)(i.h2,{id:"fit-adjust-image-size-and-position",children:"Fit (Adjust Image Size and Position)"}),"\n",(0,s.jsx)(i.p,{children:"This function adjusts the size or position of an image to fit the display area. If the image has been zoomed in or out, or moved from its original display position, this feature repositions and resizes it to fit the display window."}),"\n",(0,s.jsx)(i.h2,{id:"left--right-image-rotation",children:"Left / Right (Image Rotation)"}),"\n",(0,s.jsx)(i.p,{children:"[Left]: Performs the same function as [Rotate Left] under the Transformations menu.\n[Right]: Performs the same function as [Rotate Right] under the Transformations menu."}),"\n",(0,s.jsx)(i.h2,{id:"lengthmeasure-length",children:"Length(Measure Length)"}),"\n",(0,s.jsx)(i.p,{children:"Measures the length of a selected area in the image using a straight line. The default unit is pixels (px)."}),"\n",(0,s.jsx)(i.h2,{id:"anglemeasure-angle",children:"Angle(Measure Angle)"}),"\n",(0,s.jsx)(i.p,{children:"Displays two lines on a selected area and measures the angle between them. The measured angle is displayed in the format @inner angle (or outer angle)."}),"\n",(0,s.jsx)(i.h2,{id:"transformationsimage-transformation-tools",children:"Transformations(Image Transformation Tools)"}),"\n",(0,s.jsx)(i.p,{children:"These tools help with viewing by allowing modifications to the image. The submenu options include:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Reverse: Flips the displayed image horizontally."}),"\n",(0,s.jsx)(i.li,{children:"Flip: Flips the displayed image vertically."}),"\n",(0,s.jsx)(i.li,{children:"Rotation Left: Rotates the image left (clockwise)."}),"\n",(0,s.jsx)(i.li,{children:"Rotation Right: Rotates the image right (counterclockwise)."}),"\n",(0,s.jsx)(i.li,{children:"Invert: Inverts the brightness and contrast of the displayed image."}),"\n",(0,s.jsx)(i.li,{children:"Sharpening: Applies a sharpening filter to the displayed image."}),"\n",(0,s.jsx)(i.li,{children:"Smoothing: Applies a smoothing filter to the displayed image."}),"\n",(0,s.jsx)(i.li,{children:"Pseudo Color: Opens a menu to apply a pseudo color filter to the displayed image."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"measurements",children:"Measurements"}),"\n",(0,s.jsx)(i.p,{children:"These tools are used for various image measurements. The submenu options include:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Poly Line: Measures the total length using a polyline (broken line)."}),"\n",(0,s.jsx)(i.li,{children:"Polygon: Measures the perimeter of a polygonal area and calculates minimum, maximum, average pixel values, and pixel value standard deviation within the area."}),"\n",(0,s.jsx)(i.li,{children:"Free Line: Measures the total length using a freehand curve."}),"\n",(0,s.jsx)(i.li,{children:"Closed Line: Measures the perimeter of a closed curve and calculates minimum, maximum, average pixel values, and standard deviation of pixel values within the area."}),"\n",(0,s.jsx)(i.li,{children:"Curve Line: Measures the length of a curved line created by bending a straight line symmetrically."}),"\n",(0,s.jsx)(i.li,{children:"Center Line: Measures the length of two lines and the angle between their central points; used for thickness and angle measurements, such as skeletal structures."}),"\n",(0,s.jsx)(i.li,{children:"Circle (M): Measures the area within a circle."}),"\n",(0,s.jsx)(i.li,{children:"Ellipse (M): Measures and displays the area within an ellipse."}),"\n",(0,s.jsx)(i.li,{children:"Rectangle (M): Measures the area within a rectangle."}),"\n",(0,s.jsx)(i.li,{children:"Magnifier: Enlarges a selected part of the image."}),"\n",(0,s.jsx)(i.li,{children:"3 Points Angle: Displays the angle formed by three designated points."}),"\n",(0,s.jsx)(i.li,{children:"Cobb\u2019s Angle: Measures Cobb\u2019s angle, used for evaluating spinal curvature."}),"\n",(0,s.jsx)(i.li,{children:"Pixel Value: Shows the 2D or 3D coordinates and color value (Hounsfield unit for CT) of a specified pixel."}),"\n",(0,s.jsx)(i.li,{children:"Pixel HU Value: Saves the pixel value at the clicked position."}),"\n",(0,s.jsx)(i.li,{children:"CT Ratio: Measures the CT (Cardiothoracic) ratio."}),"\n",(0,s.jsx)(i.li,{children:"Calibrate: Recalculates measurements by resetting the unit length if pixel length information (mm) is missing or inaccurate."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"annotations",children:"Annotations"}),"\n",(0,s.jsx)(i.p,{children:"These tools allow for inputting annotations on images. When selected, a submenu appears."}),"\n",(0,s.jsx)(i.h2,{id:"capture",children:"Capture"}),"\n",(0,s.jsx)(i.p,{children:"Captures a specific area of the image or viewer and generates a DICOM image."}),"\n",(0,s.jsx)(i.h2,{id:"revise",children:"Revise"}),"\n",(0,s.jsx)(i.p,{children:"Opens a Revise window for adding markings or editing the image, with options to save changes."}),"\n",(0,s.jsx)(i.h2,{id:"utility\uc720\ud2f8\ub9ac\ud2f0",children:"Utility(\uc720\ud2f8\ub9ac\ud2f0)"}),"\n",(0,s.jsx)(i.p,{children:"A menu with additional useful viewer features:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Reset: Removes user-added Annotations and Measurements, resetting the image to its original state."}),"\n",(0,s.jsx)(i.li,{children:"DICOM: Displays DICOM header information for the selected image."}),"\n",(0,s.jsx)(i.li,{children:"Copy: Saves the selected image to the clipboard, allowing it to be pasted in other applications that support clipboard functions."}),"\n",(0,s.jsx)(i.li,{children:"Save: Manually saves user-added Annotations and Measurements, so they remain even if the viewer is closed and reopened."}),"\n",(0,s.jsx)(i.li,{children:"Setting: Opens a popup for configuring I-Rapha View\u2122 settings. The submenu may vary depending on the PACS product. Refer to each product's manual for details."}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.p,{children:"What is DICOM?"}),(0,s.jsxs)(i.p,{children:["DICOM stands for Digital Imaging and Communications in Medicine, a standard for handling, storing, and transmitting medical imaging information. For more details, visit ",(0,s.jsx)(i.a,{href:"http://dicom.nema.org",children:"http://dicom.nema.org"}),"."]})]}),"\n",(0,s.jsx)(i.h2,{id:"unfold-multiframe",children:"Unfold Multiframe"}),"\n",(0,s.jsx)(i.p,{children:"This feature allows individual frames of a multiframe image, such as an ultrasound, to be viewed in a separate popup window."}),"\n",(0,s.jsx)(i.p,{children:"After selecting a multiframe image, click the Unfold button in the menu bar to open a popup displaying each frame individually. To quickly view a specific frame and its surrounding frames, adjust the desired frame using the Cine player control bar, then click the Unfold button. The popup will display the page with the selected frame highlighted."}),"\n",(0,s.jsx)(i.p,{children:"Frame display layout can be customized in the popup (from 1x1 to 5x5). Use the mouse wheel and scrollbar to navigate through frames. The wheel scrolls by layout rows, and clicking the scrollbar moves through pages. If scrolling is cumbersome due to numerous frames, you can jump to a page by clicking the desired location on the scrollbar."}),"\n",(0,s.jsx)(i.h2,{id:"popup-menu",children:"Popup Menu"}),"\n",(0,s.jsx)(i.p,{children:"Right-clicking in the [Image Display Window] brings up a menu with functions from the I-Rapha View\u2122 menu bar."}),"\n",(0,s.jsx)(i.h2,{id:"worklist",children:"Worklist"}),"\n",(0,s.jsx)(i.p,{children:"Moves to the data query screen."}),"\n",(0,s.jsx)(i.h2,{id:"report",children:"Report"}),"\n",(0,s.jsx)(i.p,{children:"Enables creating and reviewing diagnostic reports for the selected study."}),"\n",(0,s.jsx)(i.h2,{id:"vlvirtual-layout",children:"VL(Virtual Layout)"}),"\n",(0,s.jsx)(i.p,{children:"This menu sets the layout of studies displayed in the viewer, allowing up to two studies to be displayed at once."}),"\n",(0,s.jsx)(i.h2,{id:"presentation-state",children:"Presentation State"}),"\n",(0,s.jsx)(i.p,{children:"Saves and reapplies annotations, measurement data, and display settings for images."})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7477:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/gui-c36887aaa89975cf1314ecf53b59f4f7.png"},5067:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/menu-a521000fcc44eacc2615fa81ce194e58.png"},9167:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/submenu-f0d7890a3ec0a86795c68161fed42f1a.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(6540);const t={},a=s.createContext(t);function l(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);