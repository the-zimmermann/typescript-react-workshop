var object: { name: string | null } = { name: "Maciej" };

console.log(object.name || "Tobi");

object.name = null;
console.log(object.name || "Tobi");

console.log(object.name && "Yannic");

object.name = "Maciej again";
console.log(object.name && "Yannic");

console.log(null || undefined);

console.log(null ?? undefined);

console.log(undefined ?? null);

/**
 * @todo write down your thoughts on the following output here before you run the code:
 *
 * 1.
 * 2.
 * 3.
 * 4.
 * 5.
 * 6.
 * 7.
 *
 */
