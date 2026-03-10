import { motion } from "framer-motion";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const ReactIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M482.2 241.2C476.8 239.4 471.4 237.7 466 236.1C466.9 232.4 467.7 228.7 468.5 225C480.8 165.4 472.7 117.5 445.4 101.7C419.1 86.6 376.2 102.3 332.8 140.1C328.5 143.8 324.3 147.7 320.3 151.6C317.6 149 314.8 146.4 312 143.9C266.5 103.5 220.9 86.5 193.6 102.4C167.4 117.6 159.6 162.7 170.6 219.1C171.7 224.7 172.9 230.2 174.3 235.8C167.9 237.6 161.6 239.6 155.7 241.7C102.3 260.2 64 289.4 64 319.6C64 350.8 104.8 382.1 160.3 401.1C164.8 402.6 169.3 404.1 173.9 405.4C172.4 411.4 171.1 417.3 169.9 423.4C159.4 478.9 167.6 522.9 193.8 538C220.8 553.6 266.2 537.6 310.4 498.9C313.9 495.8 317.4 492.6 320.9 489.2C325.3 493.5 329.9 497.6 334.5 501.6C377.3 538.4 419.6 553.3 445.7 538.2C472.7 522.6 481.5 475.3 470.1 417.7C469.2 413.3 468.2 408.8 467.1 404.2C470.3 403.3 473.4 402.3 476.5 401.3C534.2 382.2 576 351.3 576 319.6C576 289.3 536.6 259.9 482.2 241.2zM346.9 156.3C384.1 123.9 418.8 111.2 434.6 120.3C451.5 130 458 169.2 447.4 220.7C446.7 224.1 446 227.4 445.1 230.7C422.9 225.7 400.4 222.1 377.8 220.1C364.8 201.5 350.6 183.7 335.2 167C339.1 163.3 342.9 159.8 346.9 156.3zM231.2 371.5C236.3 380.2 241.5 388.9 247 397.4C231.4 395.7 215.9 393.2 200.6 389.9C205 375.5 210.5 360.6 216.9 345.4C221.5 354.2 226.2 362.9 231.2 371.5zM200.9 251.2C215.3 248 230.6 245.4 246.5 243.4C241.2 251.7 236 260.2 231.1 268.8C226.2 277.3 221.4 286 216.9 294.8C210.6 279.9 205.3 265.3 200.9 251.2zM228.3 320.1C234.9 306.3 242.1 292.8 249.7 279.5C257.3 266.2 265.5 253.3 274.1 240.6C289.1 239.5 304.4 238.9 320 238.9C335.6 238.9 351 239.5 365.9 240.6C374.4 253.2 382.5 266.1 390.2 279.3C397.9 292.5 405.1 306 411.9 319.7C405.2 333.5 398 347.1 390.3 360.5C382.7 373.8 374.6 386.7 366.1 399.5C351.2 400.6 335.7 401.1 320 401.1C304.3 401.1 289.1 400.6 274.4 399.7C265.7 387 257.5 374 249.8 360.7C242.1 347.4 235 333.9 228.3 320.1zM408.9 371.3C414 362.5 418.8 353.6 423.5 344.6C429.9 359.1 435.5 373.8 440.4 388.9C424.9 392.4 409.2 395.1 393.4 396.9C398.8 388.5 403.9 379.9 408.9 371.3zM423.3 294.8C418.6 286 413.8 277.2 408.8 268.6C403.9 260.1 398.8 251.7 393.5 243.4C409.6 245.4 425 248.1 439.4 251.4C434.8 266.2 429.4 280.6 423.3 294.8zM320.2 182.3C330.7 193.7 340.6 205.7 349.8 218.1C330 217.2 310.1 217.2 290.3 218.1C300.1 205.2 310.2 193.2 320.2 182.3zM204.2 121C221 111.2 258.3 125.2 297.6 160C300.1 162.2 302.6 164.6 305.2 167C289.7 183.7 275.4 201.5 262.3 220.1C239.7 222.1 217.3 225.6 195.1 230.5C193.8 225.4 192.7 220.2 191.6 215C182.2 166.6 188.4 130.1 204.2 121zM179.7 384.6C175.5 383.4 171.4 382.1 167.3 380.7C146 374 121.8 363.4 104.3 349.5C94.2 342.5 87.4 331.7 85.5 319.6C85.5 301.3 117.1 277.9 162.7 262C168.4 260 174.2 258.2 180 256.5C186.8 278.2 195 299.5 204.5 320.1C194.9 341 186.6 362.6 179.7 384.6zM296.3 482.6C279.8 497.7 260.7 509.7 239.9 517.9C228.8 523.2 216 523.7 204.6 519.2C188.7 510 182.1 474.7 191.1 427.2C192.2 421.6 193.4 416 194.8 410.5C217.2 415.3 239.8 418.6 262.7 420.3C275.9 439 290.4 456.9 305.9 473.7C302.7 476.8 299.5 479.8 296.3 482.6zM320.8 458.3C310.6 447.3 300.4 435.1 290.5 422C300.1 422.4 310 422.6 320 422.6C330.3 422.6 340.4 422.4 350.4 421.9C341.2 434.6 331.3 446.7 320.8 458.3zM451.5 488.3C450.6 500.5 444.6 511.9 435 519.6C419.1 528.8 385.2 516.8 348.6 485.4C344.4 481.8 340.2 477.9 335.9 473.9C351.2 457 365.3 439.1 378.1 420.3C401 418.4 423.8 414.9 446.3 409.8C447.3 413.9 448.2 418 449 422C453.9 443.6 454.7 466.1 451.5 488.3zM469.7 380.8C466.9 381.7 464.1 382.6 461.2 383.4C454.2 361.6 445.6 340.3 435.7 319.6C445.3 299.2 453.4 278.2 460.2 256.7C465.4 258.2 470.4 259.8 475.2 261.4C521.8 277.4 554.5 301.2 554.5 319.4C554.5 339 519.6 364.3 469.7 380.8zM320 365.8C345.3 365.8 365.8 345.3 365.8 320C365.8 294.7 345.3 274.2 320 274.2C294.7 274.2 274.2 294.7 274.2 320C274.2 345.3 294.7 365.8 320 365.8z" />
    </svg>
);

const TailwindIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M320 128C234.7 128 181.3 170.7 160 256C192 213.3 229.3 197.3 272 208C296.3 214.1 313.7 231.8 333 251.3C364.4 283.1 400.7 320 480 320C565.3 320 618.7 277.3 640 192C608 234.7 570.7 250.7 528 240C503.7 233.9 486.3 216.2 467 196.7C435.6 164.9 399.3 128 320 128zM160 320C74.7 320 21.3 362.7 0 448C32 405.3 69.3 389.3 112 400C136.3 406.1 153.7 423.8 173 443.3C204.4 475.1 240.7 512 320 512C405.3 512 458.7 469.3 480 384C448 426.7 410.7 442.7 368 432C343.7 425.9 326.3 408.2 307 388.7C275.6 356.9 239.3 320 160 320z" />
    </svg>
);

const PhpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M320 168.5C491.4 168.5 623.2 240.7 623.2 320C623.2 399.3 491.3 471.5 320 471.5C148.6 471.5 16.8 399.3 16.8 320C16.8 240.7 148.7 168.5 320 168.5zM320 151.7C143.3 151.7 0 227 0 320C0 413 143.3 488.3 320 488.3C496.7 488.3 640 413 640 320C640 227 496.7 151.7 320 151.7zM218.2 306.5C210.3 347 182.4 342.8 148.1 342.8L161.8 272.2C199.8 272.2 225.6 268.1 218.2 306.5zM97.4 414.3L134.1 414.3L142.8 369.5C183.9 369.5 209.4 372.5 233 350.4C259.1 326.4 265.9 283.7 247.3 262.3C237.6 251.1 222 245.6 200.8 245.6L130.1 245.6L97.4 414.3zM283.1 200.7L319.6 200.7L310.9 245.5C342.4 245.5 371.6 243.2 385.7 256.2C400.5 269.8 393.4 287.2 377.4 369.3L340.4 369.3C355.8 289.9 358.7 283.3 353.1 277.3C347.7 271.5 335.4 272.7 305.7 272.7L286.9 369.3L250.4 369.3L283.1 200.7zM505 306.5C497 347.6 468.3 342.8 434.9 342.8L448.6 272.2C486.8 272.2 512.4 268.1 505 306.5zM384.2 414.3L421 414.3L429.7 369.5C472.9 369.5 496.8 372 519.9 350.4C546 326.4 552.8 283.7 534.2 262.3C524.5 251.1 508.9 245.6 487.7 245.6L417 245.6L384.2 414.3z" />
    </svg>
);

const NodeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M316.3 516C314.2 516 312.1 515.4 310.2 514.4L291 503C288.1 501.4 289.5 500.8 290.5 500.5C294.3 499.2 295.1 498.9 299.2 496.5C299.6 496.3 300.2 496.4 300.6 496.6L315.4 505.4C315.9 505.7 316.7 505.7 317.2 505.4L375 472C375.5 471.7 375.9 471.1 375.9 470.4L375.9 403.7C375.9 403 375.6 402.4 375 402.1L317.2 368.8C316.7 368.5 316 368.5 315.4 368.8L257.6 402.1C257 402.4 256.7 403.1 256.7 403.7L256.7 470.4C256.7 471 257.1 471.6 257.6 471.9L273.4 481C282 485.3 287.3 480.2 287.3 475.2L287.3 409.3C287.3 408.4 288 407.6 289 407.6L296.3 407.6C297.2 407.6 298 408.3 298 409.3L298 475.2C298 486.7 291.8 493.2 280.9 493.2C277.6 493.2 274.9 493.2 267.6 489.6L252.4 480.9C248.7 478.7 246.3 474.7 246.3 470.4L246.3 403.7C246.3 399.4 248.6 395.3 252.4 393.2L310.2 359.8C313.9 357.7 318.7 357.7 322.3 359.8L380.1 393.2C383.8 395.4 386.2 399.4 386.2 403.7L386.2 470.4C386.2 474.7 383.9 478.8 380.1 480.9L322.3 514.3C320.6 515.4 318.5 516 316.3 516zM363 450.2C363 437.7 354.6 434.4 336.8 432C318.8 429.6 317 428.4 317 424.2C317 420.7 318.5 416.1 331.8 416.1C343.7 416.1 348.1 418.7 349.9 426.7C350.1 427.5 350.7 428 351.5 428L359 428C359.5 428 359.9 427.8 360.2 427.5C360.5 427.1 360.7 426.7 360.6 426.2C359.4 412.4 350.3 406 331.8 406C315.3 406 305.5 413 305.5 424.6C305.5 437.3 315.3 440.7 331.1 442.3C350 444.2 351.5 446.9 351.5 450.6C351.5 457.1 346.3 459.8 334.1 459.8C318.8 459.8 315.4 456 314.3 448.4C314.2 447.6 313.5 447 312.6 447L305.1 447C304.2 447 303.4 447.7 303.4 448.7C303.4 458.4 308.7 470 334 470C352.5 470 363 462.8 363 450.2zM417.5 400.1C417.5 406.2 412.5 411.2 406.4 411.2C400.3 411.2 395.3 406.2 395.3 400.1C395.3 393.8 400.5 389 406.4 389C412.4 388.9 417.5 393.8 417.5 400.1zM415.7 400.1C415.7 394.9 411.5 390.8 406.3 390.8C401.2 390.8 397 394.9 397 400.1C397 405.3 401.2 409.5 406.3 409.5C411.5 409.4 415.7 405.2 415.7 400.1zM411.2 406.3L408.6 406.3C408.5 405.7 408.1 402.5 408.1 402.4C407.9 401.7 407.7 401.3 406.8 401.3L404.6 401.3L404.6 406.3L402.2 406.3L402.2 393.8L406.5 393.8C408 393.8 410.9 393.8 410.9 397.1C410.9 399.4 409.4 399.9 408.5 400.2C410.2 400.3 410.3 401.4 410.6 403C410.7 404 410.9 405.7 411.2 406.3zM408.4 397.5C408.4 395.8 407.2 395.8 406.6 395.8L404.6 395.8L404.6 399.3L406.5 399.3C408.1 399.3 408.4 398.2 408.4 397.5zM137.3 255C137.3 252.3 135.9 249.9 133.6 248.6L72.3 213.3C71.3 212.7 70.1 212.4 68.9 212.3L68.3 212.3C67.1 212.3 66 212.7 64.9 213.3L3.7 248.6C1.4 249.9 0 252.4 0 255L.1 350C.1 351.3 .8 352.5 1.9 353.2C3 353.9 4.4 353.9 5.6 353.2L42 332.3C44.3 330.9 45.7 328.5 45.7 325.9L45.7 281.5C45.7 278.9 47.1 276.4 49.4 275.1L64.9 266.2C66.1 265.5 67.3 265.2 68.6 265.2C69.9 265.2 71.2 265.5 72.3 266.2L87.8 275.1C90.1 276.4 91.5 278.9 91.5 281.5L91.5 325.9C91.5 328.5 92.9 331 95.2 332.3L131.6 353.2C132.7 353.9 134.2 353.9 135.3 353.2C136.4 352.6 137.1 351.3 137.1 350L137.3 255zM472.5 151.3L472.5 327.7C472.5 330.3 471.1 332.8 468.8 334.1L407.5 369.5C405.2 370.8 402.4 370.8 400.1 369.5L338.8 334.1C336.5 332.8 335.1 330.3 335.1 327.7L335.1 256.9C335.1 254.3 336.5 251.8 338.8 250.5L400.1 215.1C402.4 213.8 405.2 213.8 407.5 215.1L422.8 223.9C424.5 224.9 426.7 223.6 426.7 221.7L426.7 127.7C426.7 124.9 429.7 123.1 432.2 124.5L468.7 144.9C471 146.1 472.5 148.6 472.5 151.3zM426.5 280.2C426.5 279.5 426.1 278.9 425.6 278.6L404.6 266.4C404 266.1 403.3 266.1 402.7 266.4L381.7 278.6C381.1 278.9 380.8 279.5 380.8 280.2L380.8 304.5C380.8 305.2 381.2 305.8 381.7 306.1L402.7 318.2C403.3 318.5 404 318.5 404.5 318.2L425.5 306.1C426.1 305.8 426.4 305.2 426.4 304.5L426.4 280.2L426.5 280.2zM636.3 279.5C638.6 278.2 640 275.7 640 273.1L640 256C640 253.4 638.6 250.9 636.3 249.6L575.4 214.2C573.1 212.9 570.3 212.9 568 214.2L506.7 249.6C504.4 250.9 503 253.4 503 256L503 326.8C503 329.5 504.4 331.9 506.7 333.2L567.6 367.9C569.8 369.2 572.6 369.2 574.9 367.9L611.7 347.4C614.2 346 614.2 342.4 611.7 341L550 305.6C548.8 304.9 548.1 303.7 548.1 302.4L548.1 280.2C548.1 278.9 548.8 277.7 550 277L569.2 265.9C570.3 265.2 571.8 265.2 572.9 265.9L592.1 277C593.2 277.7 594 278.9 594 280.2L594 297.6C594 300.4 597.1 302.2 599.6 300.8L636.3 279.5zM559 283C558.6 283.3 558.3 283.7 558.3 284.2L558.3 297.8C558.3 298.3 558.6 298.8 559 299L570.8 305.8C571.2 306.1 571.8 306.1 572.2 305.8L584 299C584.4 298.7 584.7 298.3 584.7 297.8L584.7 284.2C584.7 283.7 584.4 283.2 584 283L572.2 276.2C571.8 275.9 571.2 275.9 570.8 276.2L559 283zM304.8 326.5L304.8 256.1C304.8 253.5 303.2 251 300.9 249.7L239.8 214.5C237.7 213.3 234.8 213.1 232.4 214.5L171.3 249.7C169 251 167.4 253.4 167.4 256.1L167.4 326.5C167.4 329.3 169.3 331.7 171.4 332.9L232.6 368.1C235 369.5 237.8 369.4 240 368.1L301 332.9C302.8 331.9 304.1 330.2 304.6 328.2C304.7 327.7 304.8 327.1 304.8 326.5zM230.5 201.6L229.7 202.1L230.8 202.1L230.5 201.6zM306.7 331.8L306.3 331.1L306.3 332L306.7 331.8z" />
    </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M544 269.8C529.2 279.6 512.2 287.5 494.5 293.8C447.5 310.6 385.8 320 320 320C254.2 320 192.4 310.5 145.5 293.8C127.9 287.5 110.8 279.6 96 269.8L96 352C96 396.2 196.3 432 320 432C443.7 432 544 396.2 544 352L544 269.8zM544 192L544 144C544 99.8 443.7 64 320 64C196.3 64 96 99.8 96 144L96 192C96 236.2 196.3 272 320 272C443.7 272 544 236.2 544 192zM494.5 453.8C447.6 470.5 385.9 480 320 480C254.1 480 192.4 470.5 145.5 453.8C127.9 447.5 110.8 439.6 96 429.8L96 496C96 540.2 196.3 576 320 576C443.7 576 544 540.2 544 496L544 429.8C529.2 439.6 512.2 447.5 494.5 453.8z" />
    </svg>
);

const ImpactHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Multi-color gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-foreground/5 blur-[120px] float" />
                <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--cyber-lavender)/0.10)] blur-[100px] float" style={{ animationDelay: "2s" }} />
                <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-[hsl(var(--cyber-pink)/0.08)] blur-[120px] float" style={{ animationDelay: "4s" }} />
                <div className="absolute top-20 left-1/2 w-[300px] h-[300px] rounded-full bg-[hsl(var(--cyber-peach)/0.06)] blur-[80px] float" style={{ animationDelay: "1s" }} />
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-foreground" />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-heading font-extrabold leading-[0.9] tracking-tight"
                >
                    <span className="text-foreground mr-6 sm:mr-8 md:mr-10">ABHAY</span>
                    {/* <br /> */}
                    <span className="text-gradient-multi">GOUD</span>
                </motion.h1>

                {/* Content below name with Orbiting Circles Background */}
                <div className="relative py-16 w-full flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex h-[500px] w-full items-center justify-center pointer-events-none z-0 opacity-60 -translate-y-12">
                        <OrbitingCircles radius={120} duration={25}>
                            <ReactIcon className="text-foreground w-6 h-6" />
                            <TailwindIcon className="text-foreground w-6 h-6" />
                        </OrbitingCircles>
                        <OrbitingCircles radius={220} duration={35} reverse>
                            <DatabaseIcon className="text-foreground w-6 h-6" />
                            <PhpIcon className="text-foreground w-6 h-6" />
                        </OrbitingCircles>
                        <OrbitingCircles radius={320} duration={50}>
                            <NodeIcon className="text-foreground w-6 h-6" />
                            <ReactIcon className="text-foreground w-6 h-6" />
                        </OrbitingCircles>
                    </div>

                    {/* Sub line */}
                    <div className="relative z-10">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-lg md:text-xl text-muted-foreground font-mono max-w-xl mx-auto mb-12 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50"
                        >
                            full-stack developer crafting <span className="text-foreground">scalable</span> frontends
                            & <span className="text-cyber-lavender">robust</span> backends
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-lg bg-foreground text-background font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg inline-flex items-center gap-2"
                            >
                                VIEW WORK
                                <span className="text-xs">↓</span>
                            </a>
                            <a
                                href="https://github.com/GoudZillaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-lg glass font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg inline-flex items-center gap-2 text-foreground"
                            >
                                GITHUB
                                <span className="text-xs">↗</span>
                            </a>
                            <a
                                href="mailto:abhayajay15@gmail.com"
                                className="px-8 py-4 rounded-lg border border-border font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg inline-flex items-center gap-2 text-foreground bg-background/50 backdrop-blur-sm"
                            >
                                CONTACT
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative bottom bar */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="mt-20 mx-auto w-full max-w-2xl h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, hsl(var(--foreground)/0.5), hsl(var(--cyber-lavender)), hsl(var(--cyber-pink)), transparent)",
                    }}
                />

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1 mx-auto"
                    >
                        <div className="w-1 h-2 bg-foreground rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactHero;